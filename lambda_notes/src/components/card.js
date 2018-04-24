import React from "react";

const NoteCard = props => {
  return (
    <div className="note-card">
      <h5 className="note-title">{props.note.title}</h5>
      <div className="note-text">
        {props.note.text}
      </div>
    </div>
  );
};

export default NoteCard;