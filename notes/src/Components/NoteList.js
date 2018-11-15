import React from "react";
import Note from "./Note";

const NoteList = props => {
  return (
    <div className="notes">
      <h1>Your Notes:</h1>
      <div className="note-list">
        {props.notes.map(note => {
          return (
            <Note
              textBody={note.textBody}
              clickHandler={props.clickHandler}
              key={note._id}
              title={note.title}
            />
          );
        })}
      </div>
    </div>
  );
};

export default NoteList;
