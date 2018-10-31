import React from 'react';
import { Link } from 'react-router-dom';





const NoteCard = props => {
  
  return (
    <div>
    
    <Link to={`/get/${props.note._id}`}>
    <div  className="note-card">
          <h3>{props.note.title}</h3>
          <p>{props.note.textBody}</p>
         
    </div>
    </Link>
    </div>
    
    
  )
}

export default NoteCard;