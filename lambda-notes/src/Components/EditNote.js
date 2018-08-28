import React from "react";

const EditNote = props => {
  const note = props.notes.find(note => note.id == props.match.params.id);
  return (
    <div className="edit">
      <div className="delete">
        <p>edit</p>
        <p>delete</p>
      </div>
      <h1 className="edit-title">{note.title}</h1>
      <div className="edit-note">{note.text}</div>
    </div>
  );
};

export default EditNote;
