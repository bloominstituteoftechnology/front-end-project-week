import React from 'react'
import { connect } from 'react-redux'
import NoteForm from './NoteForm'

const NoteEdit = ({ firebase, note, match, history }) => {
  const handleSubmit = (note) => {
    
  }

  return (
    <NoteForm 
      editingNote
      handleSubmit={handleSubmit}
      note={note} />
  )
}

const mapStateToProps = (state, props) => ({
  
})

export default connect(mapStateToProps)(NoteEdit)