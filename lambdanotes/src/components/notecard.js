import React from 'react';
import './notecard.css';

const NoteCard = (props) => {
  return (
    <div className="note-card" >
      <p className="note-title" >{props.note.title}</p>
      <div className="horizontal-line" />
      <p className="note-text" >{props.note.content}</p>
    </div>
  );
}

export default NoteCard;
