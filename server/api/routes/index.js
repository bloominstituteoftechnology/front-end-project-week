const routeAuth = require('./auth')
module.exports = (server) => {
  server.use('/auth', routeAuth)
}
