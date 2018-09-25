import React from "react";

function NotesList(props) {
  //   if (!props.notesList || !props.notesList.length) {
  //     return <h1>No Notes data! Fetching</h1>;
  //   }
  return (
    <div className="notes-list-wrapper">
      {console.log(props.notesList)}
      {props.notesList.map(note => (
        <div className="note-card" key={note.id}>
          <h3>{note.title}</h3>
          <p>{note.textBody}</p>
        </div>
      ))}
    </div>
  );
}

export default NotesList;
