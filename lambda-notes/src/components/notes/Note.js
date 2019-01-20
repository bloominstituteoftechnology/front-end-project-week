import React from "react";
import { Link } from "react-router-dom";
import renderHTML from "react-render-html";

const Note = props => {
  return (
    <div className="note">
      <Link to={`/notes/${props.note.id}`}>
        <h1 className="note-title">{props.note.title}</h1>
        <div>{renderHTML(props.note.textBody)}</div>
      </Link>
    </div>
  );
};

export default Note;
