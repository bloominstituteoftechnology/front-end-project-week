import React from "react";
import '../App.css'

export default function Note(props) {
  return (
    <div className="notecard">
      <div className="notecard-title">{props.note.title}</div>

      <div className="notecard-note">{props.note.note}</div>
    </div>
  );
}
