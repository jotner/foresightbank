const crypto = require('crypto')
const sqlite = require('sqlite')
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const path = require('path')
const uuidv4 = require('uuid/v4')

app.use(bodyParser.json())
app.use(express.static(path.join(path.resolve(), 'public')))

let db

sqlite.open('./database.sqlite').then(database_ => {
  db = database_
})

// Function for crypting passwords
function hashPassword(password, salt) {
  var hash = crypto.createHash('sha256')
  hash.update(password)
  hash.update(salt)
  return hash.digest('hex')
}

// Fetch all users in a list
app.get('/userlist', function(request, response) {
  db.all('SELECT * FROM users').then(users => {
    response.send(users)
  })
})

app.get('/account', function(request, response) {
  if (request.get('Cookie') === undefined) {
    response.status(400)
    response.send('Invalid session or cookie not confirmed')
  }
  let activeToken = request.get('Cookie')
  let strippedtoken = activeToken.split('token=')
  let finToken = strippedtoken[1]
  // Get the userId from the active user
  db.all('SELECT userId FROM tokens WHERE token = ?',
    finToken).then(rows => {
    if (rows.length === 0) {
      response.send('Cookie exists however does not match any in our database')
    } else {
      // get accountInfo
      db.all('SELECT * FROM accounts WHERE userId = ?', [rows[0].userId]).then(accountInfo => {
        // get username
        db.all('SELECT username FROM users WHERE id = ?', [rows[0].userId]).then(user => {
          // merges the username in the same object as accountInfo
          accountInfo[0].username = user[0].username
          // sends accountInfo
          response.send(accountInfo[0])
        })
      })
    }
  })
})

let getUserFromRequest = request => {
  let activeToken = request.get('Cookie')
  let strippedtoken = activeToken.split('token=')
  let finToken = strippedtoken[1]
  // Get the userId from the active user
  return db.all('SELECT userId FROM tokens WHERE token = ?', finToken).then(userId => {
    if (userId.length === 0) {
      return null
    } else {
      return userId[0]
    }
  })
}

app.post('/transactions', function(request, response) {
  getUserFromRequest(request).then(user => {
    let message = {}
    let from = request.body.from
    let to = request.body.to
    let amount = request.body.amount

    // get accountInfo
    db.all('SELECT * FROM accounts WHERE userId = ? AND id = ?', [user.userId, request.body.idFrom]).then(accountInfo => {
      // get username
      if (request.body) {
        if (amount > 0 && amount !== undefined) {
          if (accountInfo[0].balance >= amount) {
            db.all('UPDATE accounts SET balance = balance - ? WHERE userId = ? AND name = ?', [amount, user.userId, from])
            db.all('UPDATE accounts SET balance = balance + ? WHERE userId = ? AND name = ?', [amount, user.userId, to])
            message.success = "Transaction Completed"
          } else {
            message.error = 'Insufficient funds.'
          }
        } else {
          message.error = 'Write a positive number!'
        }
      }
      // sends accountInfo
      response.send(message)
    })
  })
})

app.delete('/deletedbankaccount', function(request, response) {
  let id = request.body.id
  db.run('DELETE FROM accounts WHERE id = ?',
    id).then(() => {
    response.send('Deleted')
  })
})

app.post('/management', function(request, response) {
  let name = request.body.name
  getUserFromRequest(request).then(user => {
    db.run('INSERT INTO accounts (userId, name, balance) VALUES (?, ?, ?)', [user.userId, name, 0]).then(() => {
      db.all('SELECT * FROM accounts WHERE userId = ?', [user.userId]).then(accounts => {
        response.send(accounts)
      })
    })
  })
})

app.get('/registeraccount', function(request, response) {
  getUserFromRequest(request).then(user => {
    db.all('SELECT * FROM accounts WHERE userId = ?', [user.userId]).then(accounts => {
      response.send(accounts)
    })
  })
})

app.post('/login', function(request, response) {
  let inputPassword = request.body.password
  let salt = "testsalt"
  let password = hashPassword(inputPassword, salt)

  db.all('SELECT * FROM users WHERE username = ? AND password = ?;',
    [request.body.username, password]).then(rows => {

    if (rows.length == 0) {
      response.status(401)
      response.send('Wrong username or password.')
    } else {
      db.all('SELECT id FROM users WHERE username = ?;', [request.body.username]).then(id => {
        let tokenUser = id[0].id
        let randomToken = uuidv4()
        response.set('Set-Cookie', 'token=' + randomToken + '; Path=/')
        response.send('Welcome, ' + request.body.username + '!')
        db.run('INSERT INTO tokens VALUES (?, ?)', [tokenUser, randomToken]).then(() => {})
      })
    }
  })
})

app.delete('/logout', function(request, response) {
  let activeToken = request.get('Cookie')
  let strippedtoken = activeToken.split('token=')
  let finToken = strippedtoken[1]
  response.clearCookie("token")
  response.redirect('/')
  db.run('DELETE FROM tokens WHERE token = ?',
    finToken).then(() => {
    response.send('Logged out!')
  })
})

// Delete user
app.delete('/delete/:alias', function(request, response) {
  let currentUsername = request.params.alias
  db.all('SELECT id FROM users WHERE username = ?', [currentUsername]).then((userId) => {
    db.run('DELETE FROM accounts WHERE userId = ?', userId[0].id)
  })
  db.run('DELETE FROM users WHERE username = ?',
    currentUsername).then(() => {
    response.redirect('/')
    response.send('User deleted.')
  })
})

// Change username
app.put('/updatename/:alias', function(request, response) {
  let alias = request.params.alias
  let name = request.body.username
  db.all('SELECT username FROM users WHERE username=?;', [name]).then(rows => {
    if (rows.length > 0) {
      response.status(400).send()

    } else {
      db.run('UPDATE users SET username=? WHERE username=?;', [name, alias]).then(() => {
        response.send('Username changed.')
      })
    }
  })
})

// Change password
app.put('/updatepass/:alias', function(request, response) {
  let alias = request.params.alias
  let inputPassword = request.body.password
  let salt = "testsalt"
  let password = hashPassword(inputPassword, salt)
  db.run('UPDATE users SET password=? WHERE username=?;', [password, alias]).then(() => {
    response.send('Password changed.')
  })
})

app.post('/payments/:balance', function(request, response) {
  let oldBalance = request.params.balance
  let amountSent = request.body.amountSent
  let userId = request.body.userId
  let recievingUser = request.body.recievingUser
  let newBalance = oldBalance - amountSent
  let accountName = request.body.accountName

  db.all('SELECT username FROM users WHERE username=?;', [recievingUser]).then(rows => {
    if (rows.length > 0) {
      db.run('UPDATE accounts SET balance=? WHERE userId=? AND name=?;', [newBalance, userId, accountName]).then(() => {
        console.log('User balance updated.')
      })
      db.all('SELECT id FROM users WHERE username = ?', [recievingUser]).then((userId) => {
        db.all('SELECT balance FROM accounts WHERE userId = ? AND name=?', [userId[0].id, 'Private Account']).then((balance) => {
          let recievingBalance = Number(balance[0].balance) + Number(amountSent)
          db.run('UPDATE accounts SET balance=? WHERE name=? AND userId=?;', [recievingBalance, 'Private Account', userId[0].id]).then(() => {
            response.status(200)
            response.send('Recieving user balance updated.')
          })
        })
      })
    } else {
      response.status(400)
      response.send('User does not exist.')
    }
  })

})

// Register function. Generates a cryptic version of your desired password.
app.post('/register', function(request, response) {
  let username = request.body.username
  let inputPassword = request.body.password
  let id = uuidv4()
  let randomBalance = Math.floor(Math.random() * 10000)
  let salt = "testsalt"
  let password = hashPassword(inputPassword, salt)
  db.run('INSERT INTO users (id, username, password) VALUES (?, ?, ?)', [id, username, password])
    .then(() => {
      db.run('INSERT INTO accounts(userId, name, balance) VALUES(?, "Private Account", ?)', [id, randomBalance])
        .then(() => {
          response.send('You are now registered as ' + request.body.username + '.')
        })
    })
    .catch(error => {
      console.log(error)
      response.status(409)
      response.send('User already exists.')
    })
})

app.listen(3000, function() {
  console.log('The service is running!')
})