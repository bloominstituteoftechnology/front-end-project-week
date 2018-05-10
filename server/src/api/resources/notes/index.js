import express from 'express'
import { v4 } from 'uuid'

const findById = id => item => item.id === id

const sendError = (msg, res) => {
  res.status(422)
  res.json({ Error: msg })
  return
}

let notes = [
  { id: v4(), content: { title: "example note title", body: "Lorem ipsum Derrida etcetera" } },
  { id: v4(), content: { title: "another example note", body: "Ad hoc unibus Aurelius" } },
  { id: v4(), content: { title: "here's a 3rd example", body: "Pluram squirrlum expecturant" } },
]


export const notesRouter = express.Router()

notesRouter.route('/')
  .get((req, res) => res.status(200).json(notes))

  .post((req, res) => {
    const { content } = req.body
    const note = { id: v4(), content }
    if (!content.title || !content.body)
      return sendError('Notes require both a title and body', res)
    notes.push(note)
    return res.status(201).json(note)
  })

notesRouter.route('/:id')
  .get((req, res) => {
    const { id } = req.params
    const note = notes.find(findById(id))
    return note ? res.status(200).json(note) : sendError("Note not found", res)
  })

  .put((req, res) => {
    const { id } = req.params
    const { content } = req.body
    let note = notes.find(findById(id))
    if (!note)
      return sendError('Note not found')
    else if (!content.title || !content.body)
      return sendError('Notes require both a title and body', res)
    note.content = content
    return res.status(204).json(note)
  })

  .delete((req, res) => {
    const { id } = req.params
    const note = notes.find(findById(id))
    if (!note)
      return sendError('Note not found!', res)
    notes = notes.filter(n => n.id !== id)
    return res.status(202).json(note)
  })
