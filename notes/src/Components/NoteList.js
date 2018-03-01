import React from "react";

const NoteList = props => {
  const notes = props.notes;
  const target = props.target;
  return notes.map((note, i) => {
    return (
      <div className="note" key={i} onClick={() => target(i)}>
        <h1 className="noteTitle">{note.title}</h1>
        <p className="noteContent">{note.content}</p>
      </div>
    );
  });
};

export default NoteList;