import React from 'react';
import { Link } from 'react-router-dom';





const NoteCard = props => {
  
  return (
    <div className="notecard-container">
    <Link to={`/get/${props.note._id}`}>
      <div>
          <h3>{props.note.title.substring(0,17)}</h3>
          <p>{props.note.textBody.substring(0,75)}</p>
         
    </div>
    </Link>
    </div>
    
    
  )
}

export default NoteCard;