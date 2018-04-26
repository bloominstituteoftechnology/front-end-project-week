import React from 'react';

const Note = props => {
  const { id, title, content } = props.note;
  return (
    <div>
      <h1>{title}</h1>
      <p>{content}</p>
    </div>
  );
};

export default Note;
