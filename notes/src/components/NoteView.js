import React from 'react';
import './NoteView.css';

const NoteView = props => {
  const note = props.notes.find(x => x.id == props.match.params.id);
  return (
    <div className="NoteView-container">
      <h2 className="NoteView-title">{note.title}</h2>
      <p className="NoteView-content">{note.content}</p>
    </div>
  );
}

export default NoteView;