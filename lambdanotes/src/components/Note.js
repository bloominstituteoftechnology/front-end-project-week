import React from 'react';

import "./Note.css";

const Note = props => {
  return (
    <li className="Note">
      <div className="Note-NoteTitle">
        <h3>{props.title}</h3> <br />
      </div>
      <div className="Note-NoteBody">
        {props.body} <br />
      </div>
    </li>
  );
}

export default Note;
