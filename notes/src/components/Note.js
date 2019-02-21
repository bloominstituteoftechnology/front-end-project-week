import React from "react";
import { Link } from "react-router-dom";

import "../styles/Note.css"

const Note = props => {
  const truncateString = (str, num) => {
    return str.length >= 90 || num <= 90
      ? str.slice(0, num) + "..."
      : str.length <= num
      ? str
      : str.slice(0, num) + "...";
  }
  return (
  <div className="noteCard">
    <h3>
      <Link to={`/notes/${props.note.id}`}>{props.note.title}</Link>
    </h3>
    <hr />
      <p>{truncateString(props.note.content, 91)}</p>
      {props.tags.filter(tag => tag.note_id === props.note.id).map(tag => <span key={tag.id}>{`#${tag.tag},`}</span>)}
    
  </div>
)};

export default Note;
