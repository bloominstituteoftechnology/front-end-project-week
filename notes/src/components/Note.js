import React from "react";
import "./note.css";
const Note = props => {
  return (
    <div className="note-container">
      <h4>{props.title}</h4>
      <div className="note-underline" />
      <p>{props.textBody}</p>
    </div>
  );
};

export default Note;
