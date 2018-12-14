import React from "react";
import "./note.css";
const Note = props => {
  if (props.textBody.length > 300) {
    return (
      <div className="note-container">
        <h4>{props.title}</h4>
        <div className="note-underline" />
        <p> {`${props.textBody.slice(0, 300)}...`} </p>
      </div>
    );
  }
  if (props.textBody.length <= 300)
    return (
      <div className="note-container">
        <h4>{props.title}</h4>
        <div className="note-underline" />
        <p> {props.textBody} </p>
      </div>
    );
};

export default Note;
