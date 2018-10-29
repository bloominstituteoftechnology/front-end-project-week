import React from 'react'
const NoteCard = props => {
  return (
      <div>
        <h3>{props.note.title}</h3>
        <p>{props.note.textBody}</p>
      </div>
      );
};
export default NoteCard;
