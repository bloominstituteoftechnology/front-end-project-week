import React from "react";
import { Link } from "react-router-dom";
const Note = props => {
  console.log(props.note);
  return (
    <Link to={`/notes/${props.note.id}`}>
      <div className="note">
        <h2>{props.note.title.substring(0, 15)}</h2>
        <hr className="note-divider" />
        <p>
          {props.note.content.substring(0, 110)}
          ...
        </p>
      </div>
    </Link>
  );
};

export default Note;
