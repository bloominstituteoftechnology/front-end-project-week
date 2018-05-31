import React from 'react'
import NoteForm from './NoteForm'

const blankNote = { title: '', content: '' }

const NoteCreate = ({ history }) => {
  const handleSubmit = (note) => {
    history.push('/')
  }
  return (
    <NoteForm 
      handleSubmit={handleSubmit}
      note={blankNote} />
  )
}

export default NoteCreate