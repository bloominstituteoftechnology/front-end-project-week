import React from "react";
const NotePreview = props => {
  return (
    <div className="note-preview">
      <h4>{props.note.title}</h4>
      <p>{props.note.content}</p>
    </div>
  );
};
export default NotePreview;
