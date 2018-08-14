const server = require('express')()
require('./api/middleware/')(server)
require('./api/routes')(server)

// Users.create({
//   username: 'yungBruh',
//   password: 'password'
// }).then((user) => {
//   user
//     .createNote({
//       title: 'test',
//       content: 'this might work'
//     })
//     .then(() => console.log('worked..'))
// })

server.listen(8000, () => {
  console.log('\n=== API RUNNING... ===\n')
})
