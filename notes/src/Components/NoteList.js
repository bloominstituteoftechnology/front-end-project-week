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
              noteClickHandler={props.noteClickHandler}
              id={note._id}
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
