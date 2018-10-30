import React from "react";
import { Link } from "react-router-dom";

const Note = props => {
  return (
    <Link to={`/notes/${props.note._id}`}>
      <div className="note-card">
        <h3>{props.note.title}</h3>
        <p>{props.note.textBody}</p>
      </div>
    </Link>
  );
};

export default Note;
