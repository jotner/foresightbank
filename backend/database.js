const crypto = require('crypto')
const sqlite = require('sqlite')
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const path = require('path')
const uuidv4 = require('uuid/v4')
// let cors = require('cors')
// app.use((request, response, next) => {
//   response.header('Access-Control-Allow-Credentials', 'true')
//   response.header('Access-Control-Allow-Origin', 'http://localhost:8080')
//   response.header('Access-Control-Allow-Headers', 'Content-Type, Cookie')
//   next()
// })
app.use(bodyParser.json())
// app.use(cors())
app.use(express.static(path.join(path.resolve(), 'public')))

// app.set('etag', false)

let db

sqlite.open('./database.sqlite').then(database_ => {
  db = database_
})

// Function for crypting passwords.
function hashPassword(password, salt) {
  var hash = crypto.createHash('sha256')
  hash.update(password)
  hash.update(salt)
  return hash.digest('hex')
}

// Fetch all users in a list.
app.get('/userlist', function(request, response) {
  db.all('SELECT * FROM users').then(users => {
    response.send(users)
  })
})

app.get('/account', function(request, response) {
  if (request.get('Cookie') === undefined) {
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

app.post('/transactions', function(request, response) {
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
          if (request.body) {
            let transactionInfo = request.body
            console.log(accountInfo[0].userBalance)
            console.log(transactionInfo)
            db.all('UPDATE accounts SET userBalance = ? WHERE userId = ?', [accountInfo[0].userBalance + transactionInfo.amount, rows[0].userId])
            db.all('UPDATE accounts SET stockBalance = ? WHERE userId = ?', [accountInfo[0].stockBalance - transactionInfo.amount, rows[0].userId])
          }
          // sends accountInfo
          response.send(accountInfo[0])
        })
      })
    }
  })
})


app.post('/management', function(request, response) {
  let name = request.body.name
  let id = request.body.id

  db.run('INSERT INTO newBankAccount (userId, name, balance) VALUES (?, ?, ?)', [id, name, 0])
  response.send('done')
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
  db.run('DELETE FROM tokens WHERE token = ?',
    finToken).then(() => {
    response.send('Logged out!')
  })
  response.clearCookie("token");
  response.redirect('/')
})

// Register function. Generates a cryptic version of your desired password.
app.post('/register', function(request, response) {
  let username = request.body.username
  let inputPassword = request.body.password
  let id = uuidv4()
  let salt = "testsalt"
  let password = hashPassword(inputPassword, salt)
  db.run('INSERT INTO users (id, username, password) VALUES (?, ?, ?)', [id, username, password])
    .then(() => {
      db.run('INSERT INTO accounts(userId, userbalance, stockbalance) VALUES(?, 0, 0)', [id])
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

// app.put('/change', function(request, response) {
//   let alias = request.params.alias
//   name = request.body.name
//   pop = request.body.population
//   database.run('UPDATE cities SET population=?, name=? WHERE id=?;', [pop, name, alias]).then(() => {
//     response.send('Changed')
//   })
// })