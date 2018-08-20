import React from "react";
import "../CSS/notefocus.css";
import { Link } from "react-router-dom";

const NoteFocus = props => {
  const note = props.notes.find(note => note.id == props.match.params.id);
  return (
    <div className="focus">
      <div className="edit-del">
        <Link className="linkedit" to={`/notes/edit/${props.match.params.id}`}>
          <p onClick={() => props.editNote(props.match.params.id)}>edit</p>
        </Link>
        <p>delete</p>
      </div>
      <h1 className="focustitle">{note.title}</h1>
      <div className="notetxt">{note.text}</div>
    </div>
  );
};

export default NoteFocus;
