import express from 'express'
import { notesRouter } from './resources/notes'

export const rootRouter = express.Router()
rootRouter.use('/notes', notesRouter)
