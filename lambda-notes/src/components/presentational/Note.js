import React from "react";
import { NoteStyling } from "../styling/NoteStyling";

function Note(props) {
  return (
    <NoteStyling>
      <h3>{props.note.title}</h3>
      <p>
        {props.note.textBody}
      </p>
    </NoteStyling>
  );
}
export default Note;