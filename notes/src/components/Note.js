import React from "react";

export default function Note(props) {
  return (
    <div>
      <div>{props.note.title}</div>

      <div>{props.note.note}</div>
    </div>
  );
}
