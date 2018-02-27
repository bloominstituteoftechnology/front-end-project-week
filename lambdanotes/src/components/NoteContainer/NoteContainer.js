import React from 'react';

const NoteContainer = (props) => {
  return (
    <div className="note-container">
      <div className="title">{props.noteTitle}</div>
      <div className="content">{props.noteContent} </div>
    </div>
  );
};

export default NoteContainer;
