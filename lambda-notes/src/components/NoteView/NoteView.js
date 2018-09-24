import React from "react";

const NoteView = props => {
  console.log(props);
  console.log(props.note);
  return (
    <div className="note-view">
      <h1>{props.note.title}</h1>
      <p>{props.note.content}</p>
    </div>
  );
};
export default NoteView;
