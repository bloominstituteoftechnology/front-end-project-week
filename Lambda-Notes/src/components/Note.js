import React from 'react';

const Note = props => {
  const { id, label, placeholder } = props.note;
  return (
    <div>
      <h1>{label}</h1>
      <p>{placeholder}</p>
    </div>
  );
};

export default Note;
