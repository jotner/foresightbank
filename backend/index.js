const crypto = require('crypto')
const sqlite = require('sqlite')
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const path = require('path')
const uuidv4 = require('uuid/v4')
let cors = require('cors')
app.use(bodyParser.json())
app.use(cors())
app.use(express.static(path.join(path.resolve(), 'public')))

let db

sqlite.open('./database.sqlite').then(database_ => {
  db = database_
})

// Function for crypting passwords.
function hashPassword(password, salt) {
  var hash = crypto.createHash('sha256');
  hash.update(password);
  hash.update(salt);
  return hash.digest('hex');
}

// Fetch all users in a list.
app.get('/userlist', function(request, response) {
  db.all('SELECT * FROM users').then(users => {
    response.send(users)
  })
})


// app.get('/account', function(request, response) {
//   db.all('SELECT * FROM tokens WHERE userName = ? AND token = ?', []).then(rows => {
//
//   })
// })

app.post('/login', function(request, response) {
  let inputPassword = request.body.password
  let salt = "testsalt"
  let password = hashPassword(inputPassword, salt)

  db.all('SELECT * FROM users WHERE username = ? AND password = ?;',
    [request.body.username, password]).then(rows => {
    console.log(rows)

    if (rows.length == 0) {
      response.send('Wrong username or password.')
    } else {
      let tokenUser = request.body.username
      let randomToken = uuidv4()
      response.set('Set-Cookie', 'token=' + randomToken + '')
      response.send('Welcome, ' + request.body.username + '!')
      db.run('INSERT INTO tokens VALUES (?, ?)', [tokenUser, randomToken]).then(() => {
        console.log(tokenUser)
      })
    }
  })
})

// Register function. Generates a cryptic version of your desired password.
app.post('/register', function(request, response) {
  let username = request.body.username
  let inputPassword = request.body.password
  let id = uuidv4()
  let salt = "testsalt"
  let password = hashPassword(inputPassword, salt)
  db.run('INSERT INTO users VALUES (?, ?, ?)', [id, username, password])
    .then(() => {
      response.send('You are now registered as ' + request.body.username + '.')
    })
})

app.listen(3000, function() {
  console.log('The service is running!');
});

// SPRINT 2 DO NOT TOUCH
//
// app.delete('/logout', function(request, response) {
//   db.run('DELETE FROM tokens WHERE userName;').then(() => {
//     response.send('Logged out!')
//   })
// })

// app.put('/change', function(request, response) {
//   let alias = request.params.alias
//   name = request.body.name
//   pop = request.body.population
//   database.run('UPDATE cities SET population=?, name=? WHERE id=?;', [pop, name, alias]).then(() => {
//     response.send('Changed')
//   })
// })