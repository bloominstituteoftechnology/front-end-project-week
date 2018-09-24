import React from "react";
import { Link } from "react-router-dom";
import "./NoteView.css";

const NoteView = props => {
  console.log(props);
  console.log(props.note);
  return (
    <div className="note-view">
      <Link to={`/notes/${props.note.id}/edit`}>Edit</Link>
      <Link to={`/notes/${props.note.id}/delete`}>Delete</Link>
      <h1>{props.note.title}</h1>
      <p>{props.note.content}</p>
    </div>
  );
};
export default NoteView;
