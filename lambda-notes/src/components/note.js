import React from 'react';
import { Link } from 'react-router-dom';

const Note = props => {
  return (
    <div>
      <h2>{props.note.title}</h2>
      <p>{props.note.textBody}</p>
      <Link to='/edit-form'>Edit</Link>
      <Link to='/delete'>Delete</Link>
    </div>
  );
}

export default Note;