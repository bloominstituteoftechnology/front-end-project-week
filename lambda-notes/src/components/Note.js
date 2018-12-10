import React from 'react';
import '../App.css';

const Note = props => {
  return (
    <div className="note-body">
      <h2>{props.note.title}</h2>
      <p>{props.note.textBody}</p>
    </div>
  );
};



export default Note;