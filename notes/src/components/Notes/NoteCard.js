import React from 'react';




const NoteCard = props => {
  return (
    <div className="note-card">
          <h3>{props.title}</h3>
          <p>{props.text}</p>
         
    </div>
  )
}

export default NoteCard;