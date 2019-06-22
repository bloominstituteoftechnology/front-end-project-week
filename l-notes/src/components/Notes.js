import React from 'react';
import { Link } from 'react-router-dom';

const Notes = props => {
  let link = `/notes/${props.note.id}`
  return(
    <Link to={link}>
      <div className='note-preview' key={props.note.id}>
        <h4>{props.note.title}</h4>
        <p>Topic: {props.note.topic}</p>
      </div>
    </Link>
  )
}

export default Notes;
