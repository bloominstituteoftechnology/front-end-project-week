import express from 'express'
import { rootRouter } from './api'
import cors from 'cors'
import bodyParser from 'body-parser'
const app = express()

app.use(bodyParser({ extended: true }))
app.use(cors())
app.use('/api', rootRouter)

app.all('*', (req, res) => {
  res.json({
    error: "Use /api/notes to get all notes or post a note, "
      + "otherwise use /api/notes/:id to update, get or delete a single note"
  })
})

export default app
