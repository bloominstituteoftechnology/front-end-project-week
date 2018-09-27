import React from "react";

export default function Note(props) {
  return (
    <div className="single-note">
      <h3>{props.note.title}</h3>
      <p>{props.note.textBody}</p>
    </div>
  );
}
