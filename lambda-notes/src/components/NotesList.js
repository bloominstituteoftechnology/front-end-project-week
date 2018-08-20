import React from 'react';
import { Link } from "react-router-dom";
import Note from './Note';

const NotesList = props => {
  return (
    <div className="notes-list">
      <h2>Your Notes:</h2>
      {props.data.map(note => (
        <Link to={`/notes/${note.id}`} key={note.id}>
        <Note note={note}/>
        </Link>
      ))}
    </div>
    )
}

export default NotesList;