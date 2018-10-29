import React from 'react';

function NoteCard(props) {
  return (
    <div>
      <h5>{props.note.title}</h5>
      <p>{props.note.textBody}</p>
    </div>
  );
}

export default NoteCard;
