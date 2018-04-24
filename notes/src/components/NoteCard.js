import React from "react";
import Markdown from "react-markdown";
import "./NoteCard.css";

const NoteCard = props => {
  return (
    <div className="NoteCard-area">
      <div className="NoteCard-container">
        <h3>{props.title}</h3>
        <div className="NoteCard-divider"/>
        <Markdown className="NoteCard-content" source={props.content}/>
      </div>
    </div>
  );
};

export default NoteCard;