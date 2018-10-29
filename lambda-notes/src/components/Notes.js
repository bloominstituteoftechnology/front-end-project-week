import React from "react";
import Note from "./Note";

const Notes = props => {
  return (
    <div>
      {props.notes.map((note, index) => (
        <Note note={note} key={index} />
      ))}
    </div>
  );
};

export default Notes;
