import React from 'react';
import '../App.scss'

const Note = props => {
  const {note} = props


  return (
    <div key={note.id} className="note">
    <h2>{note.title}</h2>
    <p className="block-with-text">{note.textBody}</p>
    </div>
  )
}

export default Note;