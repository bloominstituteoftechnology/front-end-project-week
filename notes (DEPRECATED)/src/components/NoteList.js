import React from "react";

const NoteList = props => {
  return props.notes.map((note, i) => {
    return (
      <div className="note" key={i} onClick={() => props.toggleNote(i) }>
        <h1 className="noteTitle">{note.title}</h1>
        <p className="noteContent">{note.content}</p>
      </div>
    );
  });
};

export default NoteList;
