import React from 'react';

const NoteCard = props => {
  return (
    <div>
      <h2>{props.note.title}</h2>
      <p>{props.note.textBody}</p>
    </div>
  )
}

export default NoteCard;