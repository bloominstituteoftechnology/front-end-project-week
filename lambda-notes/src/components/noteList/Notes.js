import React from "react";
import { Note } from "./Note";

export const Notes = props => {
  return (
    <div className="noteListDiv">
      {props.notes.map(note => {
        return <Note note={note} key={note.id} />;
      })}
    </div>
  );
};
