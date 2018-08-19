require('dotenv').config()
const server = require('express')()
const jtw = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
var Sequelize = require('sequelize')

var sequelize = new Sequelize('localhost_8000', 'root', 'password', {
  host: 'localhost:8000',
  dialect: 'sqlite'
})

var Users = sequelize.define('Users', {
  username: {
    type: Sequelize.STRING,
    unique: true
  },
  password: Sequelize.STRING
})

var Notes = sequelize.define('Notes', {
  title: {
    type: Sequelize.STRING
  },
  context: Sequelize.STRING,
  tags: Sequelize.BLOB
})

let Tags = sequelize.define('Tags', {
  value: Sequelize.BLOB
})
Users.hasMany(Notes)
Notes.belongsTo(Users)
Notes.hasMany(Tags)
Tags.belongsTo(Notes)
// sequelize.sync()

// Users.create({
//   username: 'YungBruh',
//   password: 'password'
// }).then((user) => {
//   user
//     .createNote({
//       title: 'Teest1',
//       context: 'thiss might work'
//     })
//     .then((note) => {
//       note.createTag({
//         value: 'heello'
//       })
//     })
//     .then(() => console.log('worked...'))
// })

function getToken (user) {
  console.log('IN TOKEN', user)
  const payload = {
    userId: user.id
  }
  return jtw.sign(payload, process.env.SECRET, {
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
      const token = getToken(insertedUser)
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
      console.log('DATAVALUES', insertedUser.dataValues)
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
function getNotes (req, res, next) {
  const { userId } = req.token
  Notes.findAll({
    where: {
      userId
    }
  }).then((response) => {
    const notes = response.map((Notes) => Notes.dataValues).map((notes) => {
      return notes
    })
    res.status(200).send(notes)
  })
}
function getNote (req, res, next) {
  Notes.findById(req.params.id).then((insertedNote) => {
    res.status(200).json(insertedNote)
  })
}

function newNote (req, res, next) {
  const { userId } = req.token
  const { title, context, tags } = req.body
  Notes.create({
    title: title,
    context: context,
    UserId: userId,
    tags: tags
  }).then((note) => {
    note.createTag({ value: tags })
  })
}

const restricted = (req, res, next) => {
  let newtoken = req.headers.authorization.split('')
  newtoken.shift()
  newtoken.pop()
  let token = newtoken.join('')
  console.log('token innn Restricted ,', token)
  if (token) {
    jtw.verify(token, process.env.SECRET, (err, decodedToken) => {
      if (err) {
        console.log('THERE WAS AN ERROR')
        return res
          .status(401)
          .json({ error: 'you shall not pass!! - token invalid' })
      }
      console.log('decoded', decodedToken)
      req.token = decodedToken
      next()
    })
  } else {
    console.log('NO HEREEEE')
    return res.status(401).json({ error: 'you shall not pass!! - no token' })
  }
}

function deleteNote (req, res, next) {
  console.log(req.params)
  Notes.destroy({
    where: {
      id: req.params.id
    }
  }).then((insertedNote) => {
    res.status(200).json(insertedNote)
  })
}

function updateNote (req, res, next) {
  Notes.update(
    {
      title: req.body.title,
      context: req.body.context
    },
    { returning: true, where: { id: req.params.id } }
  )
}
// const passport = require('passport')
// const GoogleStrategy = require('passport-google-oauth20').Strategy
// const keys = require('../../../keys')

// passport.use(
//   new GoogleStrategy(
//     {
//       clientID: keys.googleClientID,
//       clientSecret: keys.clientSecret,
//       callbackURL: 'auth/google/callback'
//     },
//     (accessToken, refreshToken, profile, done) => {
//       console.log('accessToken', accessToken)
//       console.log('refresh', refreshToken)
//       console.log('profile', profile)
//     }
//   )
// )

// server.get(
//   '/google',
//   passport.authenticate('google', {
//     scope: [ 'profile', 'email' ]
//   })
// )
// server.get('/google/callback', passport.authenticate('google'), (req, res) => {
//   res.send('redicted somewhere lol')
// })
server.post('/register', register)
server.post('/login', login)
server.get('/notes', restricted, getNotes)
server.get('/note/:id', getNote)
server.post('/create', restricted, newNote)
server.delete('/delete/:id', deleteNote)
server.put('/edit/:id', updateNote)
module.exports = server
