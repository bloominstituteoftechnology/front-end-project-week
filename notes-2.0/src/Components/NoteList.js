import React from "react";

const NoteList = props => {
  const notes = props.notes;
  const target = props.target;
  return notes.map((note, i) => {
    return (
      <div className="singleNote" key={i} onClick={() => target(i)}>
        <h1 className="singleNoteTitle">{note.title}</h1>
        <p className="singleNoteContent">{note.content}</p>
      </div>
    );
  });
};

export default NoteList;

// <div className="noteDisplay">
// </div>
