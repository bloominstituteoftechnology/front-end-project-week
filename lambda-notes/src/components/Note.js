import React from "react";
import { Link } from "react-router-dom";

const Note = props => {
  return (
    <Link to={`/notes/${props.note.id}`} className="link">
      <div className="note-card">
        <h3>{props.note.title.substring(0, 10)}</h3>
        <p>{props.note.message.substring(0, 75)}</p>
      </div>
    </Link>
  );
};

export default Note;
