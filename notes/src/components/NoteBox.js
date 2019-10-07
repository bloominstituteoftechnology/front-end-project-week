import React from 'react';

const NoteBox = props => {
  return(
    <div className="note-box">
      <div className="title">{props.title}</div>
      <div className="text">{props.content}</div>
    </div>
  );
}

export default NoteBox;
