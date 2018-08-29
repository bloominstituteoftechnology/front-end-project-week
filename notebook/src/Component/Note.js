import React from "react";
import { Link } from "react-router-dom";

const Note = props => {
  return (
    <div>
      <Link />
      <div className="note-header">{props.note.header}</div>
      <div className="note-content">{props.note.content}</div>
    </div>
  );
};

export default Note;
