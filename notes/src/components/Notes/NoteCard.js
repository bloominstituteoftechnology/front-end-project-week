import React from 'react';
import { Link } from 'react-router-dom';



const NoteCard = props => {
  return (
    <div className="note-card">
  <Link to={`/get/${props._id}`}>
          <h3>{props.title}</h3>
          <p>{props.textBody}</p>
          </Link>
    </div>
  )
}

export default NoteCard;