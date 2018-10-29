// React import
import React from 'react';
// CSS imports
import './Note.css';

const Note = props => {
  const { title, textBody } = props.note;
  return (
    <div className="note">
      <h3 className="noteTitle">{title}</h3>
      <p className="noteBody">{textBody}</p>
    </div>
  );
};

export default Note;
