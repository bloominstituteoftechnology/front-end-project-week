import React from "react";

const NotesList = props => {
  // console.log(props.notes);
  // const { notes } = props.notes;
  return (
    <div className="notes-container">
      {props.notes.map(note => {
        return (
          <div
            key={note._id}
            onClick={() => props.history.push(`/notes/${note._id}`)}
          >
            <h2>{note.title}</h2>
            <p>{note.textBody}</p>
            <span>{note.tags}</span>
          </div>
        );
      })}
    </div>
  );
};

export default NotesList;
