import React from "react";

function NoteList(props) {
  if (!props.NoteList || !props.NoteList.length) {
    return <h1>No Notes data! Go fetch!!</h1>;
  }
  return (
    <div className="notes-list-wrapper">
      {props.NoteList.map(note => (
        <div className="note-card" key={note.id}>
          <h3>{note.title}</h3>
          <p>({note.textBody})</p>
        </div>
      ))}
    </div>
  );
}

export default NoteList;
