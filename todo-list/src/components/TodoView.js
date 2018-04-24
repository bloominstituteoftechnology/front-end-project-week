import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/TodoView.css';

export const TodoView = props => {
  const note = props.notes[props.match.params.id];
  return (
    <div className="TodoView">
      <div className="TodoView_links">
        <Link to={`/edit/${note.id}`} className="App_button">Edit</Link>
        <Link to={`/edit/${note.id}`} className="App_button">Delete</Link>
      </div>
      <div className="TodoView_note">
        <p className="TodoView_noteTitle">{note.title}</p>
        <p className="TodoView_noteBody">{note.body}</p>
      </div>
    </div>
  )
}