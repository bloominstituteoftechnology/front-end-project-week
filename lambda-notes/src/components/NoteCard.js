import React from "react";
import "../App.css";

const NoteCard = props => {
  return (
    <div className="note-card">
      <h2>{props.note.title}</h2> <hr />
      <p>{props.note.textBody}</p>
    </div>
  );
};

export default NoteCard;
