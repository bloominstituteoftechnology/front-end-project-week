import React from "react";

export default function Note(props) {
  return (
    <div>
      {props.note.title}
      {props.note.textBody}
    </div>
  );
}
