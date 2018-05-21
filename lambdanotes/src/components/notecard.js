import React from 'react';
import './notecard.css';

const NoteCard = (props) => {
  const previewLength = 150;
  let preview = "";
  if (props.note.content.length > previewLength) preview = props.note.content.substr(0, previewLength - 4) + " ...";
  else preview = props.note.content
  return (
    <div className="note-card" onClick={() => props.viewMethod(props.note.id)} >
      <p className="note-title" >{props.note.title}</p>
      <div className="horizontal-line" />
      <p className="note-text" >{preview}</p>
    </div>
  );
}

export default NoteCard;
