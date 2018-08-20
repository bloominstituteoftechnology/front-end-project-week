import React from 'react';
import './ListView.css';

const NoteCard = props => {
  return (
    <div className="note-card">
      <h3>{props.tags}</h3>
      <p>{props.title}</p>
      <p>{props.textBody}</p>
    </div>
  );
};

// NoteCard.defaultProps = {
//   tags: '',
//   title: '',
//   textBody: ''
// };

export default NoteCard;