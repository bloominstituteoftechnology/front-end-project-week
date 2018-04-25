import React from "react";
import Markdown from "react-markdown";
import "./NoteCard.css";

const NoteCard = props => {
  return (
    <div className="NoteCard-area">
      <div className="NoteCard-container">
        <div className="NoteCard-header">
          <h3>{props.title}</h3>
          <div className="NoteCard-tags">{props.tags.length > 0 ? "Tags: " : ""}{props.tags.join(", ")}</div>
        </div>
        <div className="NoteCard-divider" />
        <Markdown className="NoteCard-content" source={props.content} />
      </div>
    </div>
  );
};

export default NoteCard;
