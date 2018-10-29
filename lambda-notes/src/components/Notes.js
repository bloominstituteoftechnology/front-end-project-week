import React from "react";
import Note from "./Note";
import "./Notes.css";

const Notes = props => {
  return (
    <React.Fragment>
      <div className="notes-container">
        <h1 className="your-notes">Your Notes:</h1>
        {props.notes.map((note, index) => (
          <Note
            note={note}
            key={index}
            routeToSingleNote={props.routeToSingleNote}
            id={index}
          />
        ))}
      </div>
    </React.Fragment>
  );
};

export default Notes;
