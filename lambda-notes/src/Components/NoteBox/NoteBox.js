import React from "react";
import "./NoteBox.css";

const NoteBox = props => {
  return (
    <div className="note-box">
      <h4>{props.title}</h4>
      <div className="line" />
      <p>{props.textBody}</p>
    </div>
  );
};

export default NoteBox;
