import React from "react";
import { NoteStyling } from "../styling/NoteStyling";

function Note(props) {
  const description = props.note.textBody;
  const title = props.note.title;
  return (
    <NoteStyling>
      <h3>{title}</h3>
      <p>
        {description}
      </p>
    </NoteStyling>
  );
}
export default Note;