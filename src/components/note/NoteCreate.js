import React from 'react'
import { withFirebase } from 'react-redux-firebase'
import NoteForm from './NoteForm'

const blankNote = { title: '', content: '' }

const NoteCreate = ({ firebase, history }) => {
  const handleSubmit = (note) => {
    firebase.push('notes', note)
    history.push('/')
  }
  return (
    <NoteForm 
      handleSubmit={handleSubmit}
      note={blankNote} />
  )
}

export default withFirebase(NoteCreate)