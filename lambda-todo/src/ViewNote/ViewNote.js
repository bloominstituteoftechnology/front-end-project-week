import React from "react";
import "./ViewNote.css";

const ViewNote = props => {
  const notes = props.note.find(notes => notes.id === props.match.params.id);
  return (
    <div className="view-page">
      <div>View Note</div>
      <div>{notes.title}</div>
      <p>{notes.content}</p>
    </div>
  );
};
export default ViewNote;
