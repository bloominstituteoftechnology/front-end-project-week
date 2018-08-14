const server = require('express')()
require('./api/middleware/')(server)
require('./api/routes')(server)

server.listen(8000, () => {
  console.log('\n=== API RUNNING... ===\n')
})
