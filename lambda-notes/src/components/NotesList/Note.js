import React from "react";
import { Link } from "react-router-dom";
const Note = props => {
  return (
    <div className="note">
      <Link to={`/notes/${props.note.id}`}>
        <h2>{props.note.title}</h2>
        <p>{props.note.content}</p>
      </Link>
    </div>
  );
};

export default Note;
