import React from 'react';
import { Link } from 'react-router-dom';





const NoteCard = props => {
  
  return (
    <div className="notecard-container">
    <Link to={`/get/${props.note._id}`}>
      <div  className="notecard">
          <h3>{props.note.title}</h3>
          <p>{props.note.textBody}</p>
         
    </div>
    </Link>
    </div>
    
    
  )
}

export default NoteCard;