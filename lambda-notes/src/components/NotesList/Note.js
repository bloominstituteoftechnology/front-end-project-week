import React from "react";

const Note = props => {
  return (
    <div className="note">
      <h2>{props.note.title}</h2>
      <p>{props.note.content}</p>
    </div>
  );
};

export default Note;
