import React from 'react';
import '../App.scss'
import {Link} from 'react-router-dom'

const Note = props => {
  const {note} = props


  return (
    <div key={note.id} className="note">
    <h2>{note.title}</h2>
    <p className="block-with-text">{note.textBody}</p>
    <Link to={`/update/${note.id}`}>Update Note</Link>
    </div>
  )
}

export default Note;