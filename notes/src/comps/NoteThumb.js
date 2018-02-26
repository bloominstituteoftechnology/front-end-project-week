import React from 'react';

// props.note is a note object with title and content
const NoteThumb = props => {
  return (
    <div className="noteThumb__container">
      <h3>{props.note.title}</h3>
      <hr />
      <p>{props.note.content}</p>
    </div>
  );
};

export default NoteThumb;
