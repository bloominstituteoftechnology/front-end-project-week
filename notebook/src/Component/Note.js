import React from "react";
import { Link } from "react-router-dom";

const Note = props => {
  return (
    
    <div key={props._id} className="each-ind-note">
    <Link to={`/notes/${props.note._id}`} className="note-links">
      <div className="note-header">{props.note.title}</div>
      <div className="note-content">{props.note.textBody}</div>
      </Link>
    </div>
  );
};

export default Note;