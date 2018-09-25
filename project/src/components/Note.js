import React from "react";

export default function Note(props) {
  return (
    <div>
      <p>Note Title: {props.note.title}</p>
      <p>Body: {props.note.textBody}</p>
    </div>
  );
}
