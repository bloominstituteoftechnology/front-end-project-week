import React from 'react';
import { Link } from 'react-router-dom';

const Note = props => {
  return (
    <div className='note'>
      <h3>{props.note.title}</h3>
      <p>{props.note.textBody}</p>
    </div>
  )
}

export default Note;
