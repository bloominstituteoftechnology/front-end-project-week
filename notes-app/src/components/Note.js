import React from 'react';
import { Link } from 'react-router-dom';

function Note(props) {
  return (
    <div className="noteCard">
      <Link to={`/notecard/${props.note._id}`}>
        <div className="noteCardTitle">{props.note.title}</div>
        <div className="noteCardText">{props.note.textBody}</div>    
      </Link>
    </div>
  )
}

Note.defaultProps = {
  title: '',
  textBody: ''
}


export default Note;