import React from 'react';
import { Link } from 'react-router-dom';
import Markdown from 'markdown-to-jsx';




const Note = props => {
  if (!props.note) {
    return (
      <h1>Loading note...</h1>
    )
  }
  const body = props.note.textBody.replace(/\[ \]/g, '<input type="checkbox" className="checkbox" value="on">');

  return (
    <div className='note-container'>
      <div className='note'>
        <div className='note-buttons'>
        <Link to={`${props.note.id}/edit`}>
          <div className='button2 edit-button'>edit</div>
        </Link>
        <Link to={`${props.note.id}/delete`} >
          <div className='button2 delete-button'>delete
          </div>
        </Link>
        </div>
        <h3>{props.note.title}</h3>
        <Markdown>{body }</Markdown>

      </div>
    </div>

  )
}

export default Note;
