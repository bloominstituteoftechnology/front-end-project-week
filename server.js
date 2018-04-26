const express = require('express')
const TodoData = require('./MOCK_DATA')
const cors = require('cors')
const bodyparser = require('body-parser')

const app = express()
const port = process.env.PORT || 5000

app.use(bodyparser.json())
app.use(cors())

app.get('/api/todos', (req, res) => {
  res.send([...TodoData])
})

app.listen(port, () => console.log(`Listening on port ${port}`))
