import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { deleteNote } from '../actions/notesActions'

const Note = props => {
  const { note, deleteNote } = props

  const clickHandler = () => {
    deleteNote(note.id)
  }

  return (
    <div key={note.id} className="note-card">
      <p className="close-button" onClick={clickHandler}>CLOSE</p>
      <h2>{note.title}</h2>
      <h4>{note.priority}</h4>
      <p>{note.summary}</p>
      <p>{note.textBody}</p>
      <p>{note.urlAddress}</p>
    </div>
  )
}
const mapStateToProps = () => ({})
export default connect(mapStateToProps, { deleteNote })(Note)