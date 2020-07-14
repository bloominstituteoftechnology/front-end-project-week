import React from "react";

export default function Note(props) {
  return (
    <div className="note">
      <h3>{props.note.title}</h3>
      <p>{props.note.note_text}</p>
    </div>
  );
}
