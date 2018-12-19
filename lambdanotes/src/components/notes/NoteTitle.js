import React from 'react';
import "./Notes.css"

const NoteTitle = (props) => (
  <div className="note-title">
    {props.title}
  </div>
);

export default NoteTitle;
