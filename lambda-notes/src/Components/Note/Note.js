import React from "react";

import "./Note.css";

const Note = props => {
  const note = props.notes.find(
    note => note._id.toString() === props.match.params.id
  );

  if (!note) {
    return (
      <h2 className="error-message">
        Sorry, the note is currently unavailable!
      </h2>
    );
  }
  return (
    <div className="note-container">
      <div className="button-menu">
        <i className="fas fa-trash-alt" />
        <i
          onClick={() => props.history.push(`/edit-note/${note._id}`)}
          className="fas fa-edit"
        />
      </div>
      <h2 className="title">{note.title}</h2>
      <p>{note.textBody}</p>
    </div>
  );
};

export default Note;
