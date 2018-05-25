import React from 'react';
import './notecard.css';

//The component for individual note cards in the list view.
const NoteCard = (props) => {
  return (
    <div className="note-card" onClick={() => props.viewMethod(props.note._id)} >
      <p className="note-title" >{props.note.title}</p>
      <div className="horizontal-line" />
      <div className="note-text-container" >
        <p className="note-text" >{props.note.textBody}</p>
      </div>
    </div>
  );
}

export default NoteCard;
