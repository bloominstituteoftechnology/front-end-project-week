import React from 'react'
import { connect } from 'react-redux'
import NoteForm from './NoteForm'
import { createNote } from '../../state/actions'

const blankNote = { title: '', content: '' }

const NoteCreate = ({ createNote }) => (
  <NoteForm 
    handleSubmit={createNote}
    note={blankNote} />
)

const dispatchToProps = { createNote }

export default connect(null, dispatchToProps)(NoteCreate)