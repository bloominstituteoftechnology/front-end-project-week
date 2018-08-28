import React from "react";

const Note = props => {
  return (
    <div>
      <div className="note-header">{props.note.header}</div>
      <div className="note-content">{props.note.content}</div>
    </div>
  );
};

export default Note;
