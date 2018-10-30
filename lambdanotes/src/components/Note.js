import React from "react";
import { Link } from "react-router-dom";
import "../styles/Note.css";

const Note = props => {
  return (
    <li className="NoteListPage">
      <Link to={`/note/${props.note._id}`} className="note-link">
        <h3 className="note-title">{props.note.title}</h3>
        <p className="note-preview">{props.note.textBody}</p>
      </Link>
    </li>
  );
};

export default Note;
