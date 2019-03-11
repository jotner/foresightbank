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

function hashPassword(password, salt) {
  var hash = crypto.createHash('sha256');
  hash.update(password);
  hash.update(salt);
  return hash.digest('hex');
}

app.get('/logintest', function(request, response) {
  db.all('SELECT * FROM users').then(users => {
    response.send(users)
    console.log(users)
  })
})

app.get('/login', function(request, response) {
  db.all('SELECT username, password FROM users').then(users => {
    response.send(users)
    console.log(users)
  })
})

app.post('/login', function(request, response) {
  username = request.body.username
  inputPassword = request.body.password
  id = uuidv4()
  let salt = "testsalt"
  password = hashPassword(inputPassword, salt)
  db.run('INSERT INTO users VALUES (?, ?, ?)', [id, username, password])
    .then(() => {
      response.send('Registered!')
    })
})

// app.put('/cities/:alias', function(request, response) {
//   let alias = request.params.alias
//   name = request.body.name
//   pop = request.body.population
//   database.run('UPDATE cities SET population=?, name=? WHERE id=?;', [pop, name, alias]).then(() => {
//     response.send('Changed')
//   })
// })
//
// app.delete('/cities/:alias', function(request, response) {
//   let alias = request.params.alias
//   database.run('DELETE FROM cities WHERE id=?;', [alias]).then(() => {
//     response.send('Borttaget')
//   })
// })

app.listen(3000, function() {
  console.log('The service is running!');
});