import React from "react";
import { Link } from "react-router-dom";

const Note = props => {
  return (
    <div className="note-card">
      <Link to={`/note/${props.id}`}>
        <h4 onClick={() => props.fetchNote(props.id)}>{props.title}</h4>
      </Link>
    </div>
  );
};

export default Note;
