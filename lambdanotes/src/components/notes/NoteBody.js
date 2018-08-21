import React from 'react';
import "./Notes.css"

const NoteBody = (props) => (
  <div className="note-body">
    {props.content}
  </div>
);

export default NoteBody;
