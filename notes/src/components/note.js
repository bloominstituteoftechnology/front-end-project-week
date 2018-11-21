import React from 'react';
import '../App.scss'
import {Link} from 'react-router-dom'
import UpdateNote from './UpdateNote';

const Note = props => {
  const {note} = props


  return (
    <div key={note.id} className="note">
    <h2>{note.title}</h2>
    <p className="block-with-text">{note.textBody}</p>
    <Link to={`/update/${note._id}`}>Update Note</Link>
    </div>
  )
}

export default Note;