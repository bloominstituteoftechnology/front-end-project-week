import React from "react";

export default function Note(props) {
  return (
    <div>
      <p>Title: {props.note.title}</p>
      <p>Text Body: {props.note.textBody}</p>
    </div>
  );
}
