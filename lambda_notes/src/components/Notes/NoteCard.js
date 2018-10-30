import React from 'react';

const NoteCard = props => {
  return (
    <>
      <h2>{props.note.title}</h2>
      <p>{props.note.textBody}</p>
    </>
  );
};

export default NoteCard;
