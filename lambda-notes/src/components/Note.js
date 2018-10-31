import React from 'react';
import { Link } from 'react-router-dom';


const Note = props => {
  if (!props.note) {
    return (
      <h1>Loading note...</h1>
    )
  }
  return (

    <div className='note-container'>
      <div className='note'>
        <div className='note-buttons'>
        <Link to={`${props.note._id}/edit`}>
          <div className='button2 edit-button'>edit</div>
        </Link>
        <Link to={`${props.note._id}/delete`} >
          <div className='button2 delete-button'>delete
          </div>
        </Link>
        </div>
        <p>tagged: {props.note.tags}</p>
        <h3>{props.note.title}</h3>
        <p>{props.note.textBody}</p>
      </div>
    </div>

  )
}

export default Note;
