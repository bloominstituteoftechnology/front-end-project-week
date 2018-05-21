import React from 'react';
import './noteview.css';

const NoteView = (props) => {
  return (
    <div className="note-view">
      <div className="note-view-links">
        <div className="note-view-link">edit</div><div className="note-view-link">delete</div>
      </div>
      <h5 className="note-view-title">{props.note.title}</h5>
      <p className="note-view-content">{props.note.content}</p>
    </div>
  );
}

export default NoteView;
