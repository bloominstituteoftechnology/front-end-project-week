import React from "react";
import { Link } from "react-router-dom";

import "../styles/Note.css"

const Note = props => (
  <div className="noteCard">
    <h3>
      <Link to={`/note/${props.note.id}`}>{props.note.title}</Link>
    </h3>
    <hr />
      <p className="block-with-text">{props.note.text}</p>
    
  </div>
);

export default Note;
