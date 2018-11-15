import React from "react";
import { Link } from "react-router-dom";

const Note = props => (
  <div>
    <h3>
      <Link to={`/note/${props.note.id}`}>{props.note.title}</Link>
    </h3>
    <p>{props.note.text}</p>
  </div>
);

export default Note;