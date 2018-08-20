import React from "react";
import "./ViewNote.css";

const ViewNote = props => {
  const note = props.notes.find(note => note.id === props.match.params.id);
  return (
    <div className="view-page">
      <div>View Note</div>
      <div>{note.title}</div>
      <p>{note.content}</p>
    </div>
  );
};
export default ViewNote;
