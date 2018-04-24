import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/NoteView.css';

export const NoteView = props => {
  const note = props.notes[props.match.params.id];
  return (
    <div className="NoteView">
      <div className="NoteView_note">
        <p className="NoteView_noteTitle">{note.title}</p>
        <p className="NoteView_noteBody">{note.body}</p>
      </div>
      <div className="NoteView_links">
        <Link to={`/edit/${note.id}`} className="App_button">Edit</Link>
        <Link to={`/view/${note.id}/delete`} className="App_button">Delete</Link>
      </div>
    </div>
  )
}