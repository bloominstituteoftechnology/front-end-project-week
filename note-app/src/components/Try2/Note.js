import React from "react";
import { Link } from "react-router-dom";

const Note = props => {
  return (
    <Link to={`/note/${props.note.id}`}>
      <div className="noteBody">
        <div className="noteTitle">{props.note.title}</div>
        <p className="notebody">{props.note.body}</p>
      </div>
    </Link>
  );
};

export default Note;
