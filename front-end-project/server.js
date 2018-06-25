const express = require('express')
const cors = require('cors')

const port = process.env.PORT || 3000

const server = express()
server.use(express.json())
server.use(cors())

server.get('/', (req, res) => {
    res.send(`Hello world from ${port}`)
});

server.post('/payload', (req, res) => {
    res.json(req.body)
})

server.listen(port, err => {
    if (err) console.log(err)
    console.log(`Magic happening on ${port}`)
})