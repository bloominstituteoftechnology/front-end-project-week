import React from "react";
import { Link } from "react-router-dom";
const Note = props => {
  return (
    <div className="note">
      <Link to={`/notes/${props.note._id}`}>
        <div onClick={() => props.routeToSingleNote(props.note._id)}>
          <h1>{props.note.title}</h1>
          <p>{props.note.textBody}</p>
        </div>
      </Link>
    </div>
  );
};

export default Note;
