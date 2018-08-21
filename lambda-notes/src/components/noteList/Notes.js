import React from "react";
import { Note } from "./Note";

import "../../css_styles/notes.css";

export const Notes = props => {
  console.log("NOTES PROPS", props.notes.length);
  return (
    <div className="notesMainDiv">
      <h2 className="landingTitle">Your Notes:</h2>
      <div className="noteListDiv">
        {props.notes.map(note => {
          return <Note note={note} id={note.id} key={note.id} />;
        })}
      </div>
    </div>
  );
};
