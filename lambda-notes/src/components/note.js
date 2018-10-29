import React from 'react';
import { Link } from 'react-router-dom';

const Note = props => {
  return (
    <div>
      <h2>{props.note.title}</h2>
      <p>{props.note.textBody}</p>
      <Link to='/edit-form'>Edit</Link>
      <div className='delete-button'>Delete</div>
    </div>
  );
}

export default Note;