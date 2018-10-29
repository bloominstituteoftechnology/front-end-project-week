import React from 'react';
import { Route, Link } from 'react-router-dom';
import { EditView } from '../views';

const Note = props => {
  console.log('in note', props.note)


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
        <h2>{props.note.title}</h2>
        <p>{props.note.textBody}</p>
      </div>
    </div>

  )
}

export default Note;
