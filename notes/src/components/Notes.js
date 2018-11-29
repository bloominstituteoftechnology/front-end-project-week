import React from "react";
import Note from "./Note";

const Notes = props => {
  return (
    <div className="Notes">
      <h2>Your Notes:</h2>
      <ul>
        {props.notes.map(note => {
          return (
            <div
              id=
              {note.id}
              title=
              {note.title}
              txt=
              {note.textBody}
              key=
              {note.id}
              deleteNote = {props.deleteNote}
              editNote = {props.editNote}>
              <h2>{note.title}</h2> {note.textBody}
            </div>
          );
        })}
      </ul>
    </div>
  );
};

Note.defaultProps = {
  notes: []
};

export default Notes;
