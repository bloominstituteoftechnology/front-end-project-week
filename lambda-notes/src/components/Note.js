import React from 'react';
import '../App.css';

const Note = props => {
  return (
    <div >
      <h2>{props.note.title}</h2>
      <p>{props.note.textBody}</p>
    </div>
  );
};



export default Note;