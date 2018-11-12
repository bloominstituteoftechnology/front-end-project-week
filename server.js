const express = require('express')
const cors = require('cors')
const notesRouter = require('./notes/notesRouters.js')
const server = express()

server.use(cors())
server.use(express.json())
server.use("/api/notes", notesRouter)

module.exports = server


{
  "name": "back-end-project-week",
  "version": "1.0.0",
  "description": "Backend project week",
  "main": "index.js",
  "scripts": {
    "dev": "nodemon",
    "start": "node index.js"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/duckets615/front-end-project-week.git"
  },
  "author": "Chris Reilly",
  "license": "ISC",
  "bugs": {
    "url": "https://github.com/duckets615/front-end-project-week/issues"
  },
  "homepage": "https://github.com/duckets615/front-end-project-week#readme",
  "dependencies": {
    "axios": "^0.18.0",
    "bcryptjs": "^2.4.3",
    "cors": "^2.8.4",
    "express": "^4.16.4",
    "express-session": "^1.15.6",
    "helmet": "^3.14.0",
    "knex": "^0.15.2",
    "sqlite3": "^4.0.3"
  },
  "devDependencies": {
    "nodemon": "^1.18.5"
  }
}
