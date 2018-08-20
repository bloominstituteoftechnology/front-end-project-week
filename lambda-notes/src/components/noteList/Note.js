import React from "react";
import { Link } from "react-router-dom";

export const Note = props => {
  return (
    <Link to={`/notes/${props.id}`} className="noteDiv">
      <h2>{props.note.title}</h2>
      <div className="noteDescription">
        <p>{props.note.description}</p>
      </div>
    </Link>
  );
};
