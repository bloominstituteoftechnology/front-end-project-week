require('dotenv').config()
const server = require('express')()
const Users = require('../../models').Users
const jtw = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

function getToken (user) {
  const userId = user.userId
  return jtw.sign({ userId }, process.env.SECRET, {
    expiresIn: '1d'
  })
}

function register (req, res, next) {
  let { password, username } = req.body
  password = bcrypt.hashSync(password, 10)

  console.log(password)
  Users.create({
    username: username,
    password: password
  }).then((response) => {
    const token = getToken(response.username)
    res.status(201).json({ token: token })
  })
}
server.post('/register', register)
module.exports = server
