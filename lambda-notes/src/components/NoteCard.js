import React from 'react'
import { Link } from 'react-router-dom'
import { getNote } from '../actions'
import { connect } from 'react-redux'
const NoteCard = (props) => {
  const note = props.note
  const handleDetails = () => {
    props.getNote(note._id)
    props.history.push(`/notes/${note._id}`)
  }

  return (
    // <Link key={note._id} className='myLink' to={`/notes/${note._id}`}>
    <div key={note._id} className='myLink' onClick={() => handleDetails()}>
      <h1 className='cardTitle'>{note.title}</h1>
      <p>{note.textBody}</p>
    </div>
  )
}

export default connect(null, { getNote })(NoteCard)
