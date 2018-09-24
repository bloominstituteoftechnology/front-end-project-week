import React from 'react';

const NoteCard = (props) => {
  console.log(props);
  return (
    <div>
      <h1>{props.note.title}</h1>
      <p>{props.note.textBody}</p>
    </div>
  );
};

export default NoteCard;
