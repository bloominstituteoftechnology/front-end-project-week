import React from 'react'
import { connect } from 'react-redux'
import NoteForm from './NoteForm'
import { updateNote } from '../../state/actions'

const NoteEdit = ({ currentNote, updateNote }) => (
  <NoteForm
    editingNote
    handleSubmit={updateNote}
    note={currentNote} />
)

const stateToProps = ({ currentNote }) => ({ currentNote })
const dispatchToProps = { updateNote }

export default connect(stateToProps, dispatchToProps)(NoteEdit)