import React from "react";

function NotesList(props) {
  if (!props.notesList || !props.notesList.length) {
    return <h1>Loading...</h1>;
  }
  return (
    <div>
      {props.notesList.map(note => (
        <div key={note.id}>
          <h3>{note.title}</h3>
          <p>{note.textBody}</p>
        </div>
      ))}
    </div>
  );
}

export default NotesList;
