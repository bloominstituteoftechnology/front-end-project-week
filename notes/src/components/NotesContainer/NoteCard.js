import React from 'react';

const NoteCard = props => {
  return (
    <div>
      <h2>Your Notes:</h2>
      <h3>{props.note.title}</h3>
      <p>{props.note.textBody}</p>
    </div>
  )
}

export default NoteCard;