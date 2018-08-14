require('dotenv').config()
const server = require('express')()
const jtw = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
var Sequelize = require('sequelize')

var connection = new Sequelize('database', 'root', 'password', {
  host: 'localhost:8000',
  dialect: 'sqlite'
})
var Users = connection.define('Users', {
  username: {
    type: Sequelize.STRING,
    unique: true
  },
  password: Sequelize.STRING
})
// connection.sync().then(() => {
//   Users.create({
//     username: 'Ari',
//     password: 'password'
//   })
// })

function getToken (user) {
  const userId = user.userId
  return jtw.sign({ userId }, process.env.SECRET, {
    expiresIn: '1d'
  })
}

function register (req, res, next) {
  let { password, username } = req.body
  console.log(req.body)
  password = bcrypt.hashSync(password, 10)
  Users.create({
    username: username,
    password: password
  })
    .then((insertedUser) => {
      const token = getToken(insertedUser.username)
      res.status(201).json({ token: token })
    })
    .catch(next)
}
function login (req, res, next) {
  const credentials = req.body
  Users.findOne({
    where: { username: `${credentials.username}` }
  })
    .then((insertedUser) => {
      console.log(insertedUser.dataValues)
      let user = insertedUser.dataValues
      const lol = bcrypt.compareSync(credentials.password, user.password)
      if (lol === true) {
        const token = getToken(user)
        res.status(200).json({ mes: 'Logged In', token })
      } else {
        return res.status(401).json({ error: 'U shall not pass!' })
      }
    })
    .catch(next)
}
server.post('/register', register)
server.post('/login', login)
module.exports = server
