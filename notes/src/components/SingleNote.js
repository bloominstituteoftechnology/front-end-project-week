import React from 'react';
import { Link } from 'react-router-dom';

const SingleNote = props => {
  return (
    <div 
      className='single-note-container'>
      <Link 
        to={`/note/${props.note._id}`} 
        className='note-title'>{props.note.title}
      </Link>
      <Link 
        to={`/note/${props.note._id}`} 
        className='note-content'>{props.note.textBody}
      </Link>
    </div> 
  )
}

export default SingleNote;
