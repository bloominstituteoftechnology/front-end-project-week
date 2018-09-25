import React from "react";
import { Link } from "react-router-dom";
const Note = props => {
  return (
    <Link to={`/notes/${props.note.id}`}>
      <div className="note">
        <h2>{props.note.title}</h2>
        <p>{props.note.content}</p>
      </div>
    </Link>
  );
};

export default Note;
