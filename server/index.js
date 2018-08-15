const server = require('express')()
require('./api/middleware/')(server)
require('./api/routes')(server)

const port = 8000

server.listen(port, () => {
  console.log('\n=== API RUNNING... ===\n')
})
