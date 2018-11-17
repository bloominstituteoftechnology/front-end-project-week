import React from "react";
import { Link } from "react-router-dom";

import "../styles/Note.css"

const Note = props => {
  const truncateString = (str, num) => {
    return str.length >= 100 || num <= 100
      ? str.slice(0, num) + "..."
      : str.length <= num
      ? str
      : str.slice(0, num) + "...";
  }
  return (
  <div className="noteCard">
    <h3>
      <Link to={`/note/${props.note._id}`}>{props.note.title}</Link>
    </h3>
    <hr />
      <p>{truncateString(props.note.textBody, 101)}</p>
    
  </div>
)};

export default Note;
