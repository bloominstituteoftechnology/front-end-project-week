import React from "react";
const NotePreview = props => {
  return (
    <div className="note-preview">
      <h3>{props.note.title}</h3>
      <p>{props.note.textBody}</p>
    </div>
  );
};
export default NotePreview;
