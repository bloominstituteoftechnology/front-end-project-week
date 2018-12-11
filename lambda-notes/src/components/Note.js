import React from "react";
import { Link } from "react-router-dom";

const Note = props => {
  return (
    <div className="note-card">
      <Link to={`/note/${props.id}`}>
        <h4 className="note-title" onClick={() => props.fetchNote(props.id)}>{props.title}</h4>
      </Link>
      <hr />
      <p>{props.text}</p>
    </div>
  );
};

export default Note;
