import React from "react";

export default function NotesList(props) {
  return (
    <div className="notecard">
      <div className="notecard-title"> {props.note.title}</div>
      <div className="notecard-note">{props.note.note}</div>
    </div>
  );
}
