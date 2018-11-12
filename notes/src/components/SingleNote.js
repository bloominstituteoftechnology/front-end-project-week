import React from 'react';
import { Link } from 'react-router-dom';

const SingleNote = props => {

console.log(props.note)
  return (
    <div className='single-note-container'>
    <Link to={`/note/${props.note._id}`} className='TITLE'>{props.note.title}</Link>
      <li className='note-content'>{props.note.textBody}</li>
    </div> 
  )
}

export default SingleNote;
