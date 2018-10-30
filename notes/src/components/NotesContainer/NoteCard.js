import React from 'react';
import { Link } from 'react-router-dom';

const NoteCard = props => {
  return (
    <div className="note-card">
       <Link to={`/notes/get/${props.note._id}`}>
          <h3>{props.note.title}</h3>
          <p>{props.note.textBody}</p>
       </Link>
          
      
    </div>
  )
}

export default NoteCard;