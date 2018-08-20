import React from 'react';
import './ListView.css';

const NoteCard = props => {
  return (
    <div className="note-card">
      <h3>{props.title}</h3>
      <p>{props.textBody}</p>
    </div>
  );
};

export default NoteCard;