import React from 'react';

const Note = props => {
  const { note } = props;
  return (
    <div className="note">
      <h3>{note.title}</h3>
      <p>{note.textBody}</p>
    </div>
  );
};

export default Note;
