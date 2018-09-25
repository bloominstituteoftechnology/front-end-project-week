import React from "react";

const NotesList = props => {
  if (!props.notesList || !props.notesList.length) {
    return <h1>No notes :(</h1>;
  }
  return (
    <div className="notes-container">
      {props.notesList.map(note => (
        <div className="note" key={note.id}>
          <h3 onClick={() => props.history.push(`/notes/${note.id}/info`)}>
            {note.title}
          </h3>
          <h3>({note.body})</h3>
        </div>
      ))}
    </div>
  );
};

export default NotesList;
