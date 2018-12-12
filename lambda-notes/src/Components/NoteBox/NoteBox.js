import React from "react";
import "./NoteBox.css";

const NoteBox = props => {
  let text = props.textBody
    .split("")
    .splice(0, 199)
    .join("")
    .concat("...");
  let title = props.title
    .split("")
    .splice(0, 29)
    .join("")
    .concat("...");

  return (
    <div className="note-box">
      <h4>{props.title.length > 30 ? title : props.title}</h4>
      <div className="line" />
      <p>{props.textBody.length > 200 ? text : props.textBody}</p>
    </div>
  );
};

export default NoteBox;
