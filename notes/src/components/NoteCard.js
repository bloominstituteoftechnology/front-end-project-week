import React from "react";
import "./NoteCard.css";

const NoteCard = props => {
  return (
    <div className="NoteCard-area">
      <div className="NoteCard-container">
        <h3>{props.title}</h3>
        <div className="NoteCard-divider"/>
        <p className="NoteCard-content">
          {props.content}
        </p>
      </div>
    </div>
  );
};

export default NoteCard;