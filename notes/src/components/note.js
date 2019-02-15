import React from 'react';
import '../App.scss'
import {Link} from 'react-router-dom'


const Note = props => {
  const {note} = props


  return (
    <Link key={note.id} className="note" to={`/view/${note._id}`}>
    <div>
    <h2>{note.title}</h2>
    <p className="block-with-text">{note.textBody}</p>
    </div>
    </Link>
  )
}

export default Note;