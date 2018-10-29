import React from 'react';

const Note = props => {
  const { title, textBody } = props.note;
  return (
    <div>
      <h2>{title}</h2>
      <p>{textBody}</p>
    </div>
  );
};

export default Note;
