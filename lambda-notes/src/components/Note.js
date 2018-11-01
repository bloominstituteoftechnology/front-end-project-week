import React from 'react';
import { Link } from 'react-router-dom';
import MDReactComponent from 'markdown-react-js';



const Note = props => {
  if (!props.note) {
    return (
      <h1>Loading note...</h1>
    )
  }
  const body = props.note.textBody;
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
        <h3>{props.note.title}</h3>
        <MDReactComponent text={body} />
      </div>
    </div>

  )
}

export default Note;
