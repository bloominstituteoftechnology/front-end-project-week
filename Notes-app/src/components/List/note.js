import React from "react";
import "./notelist.css";
import { Link } from "react-router-dom";

export const Note = props => {
  return (
    <div className="note">
      <Link to={`/note/${props.note._id}`}>
        <h2>{props.note.title}</h2>
      </Link>
      <a> {props.note.textBody}</a>
    </div>
  );
};
