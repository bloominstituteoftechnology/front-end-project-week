import React from 'react';
import { Link } from 'react-router-dom';

const Note = props => {
  return (
    <Link to={`/notes/${props.note.id}`} className='note' >
      <h2>{props.note.title}</h2>
      <p>{props.note.textBody}</p>
      <p>ID: {props.note.id}</p>
      {/* <Link to='/edit-form'>Edit</Link>
      <button onClick={props.delete} value={props.id} className='delete-button'>Delete</button> */}
    </Link>
  );
}

export default Note;