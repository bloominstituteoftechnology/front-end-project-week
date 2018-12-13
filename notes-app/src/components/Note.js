import React from 'react';
import { Link } from 'react-router-dom';

function Note(props) {

  return (
    <div className="note">
      <Link to={`/notecard/${props.note._id}`}>
        <div className="noteTitle">{props.note.title}</div>
        <div className="noteText">{props.note.textBody}</div>    
      </Link>
    </div>
  )
}

Note.defaultProps = {
  title: '',
  textBody: ''
}


export default Note;