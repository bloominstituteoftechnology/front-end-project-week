import React from "react";
import "./notelist.css";
import { Link } from "react-router-dom";

export const Note = props => {
  return (
    <div className="note">
      <Link to={`/note/${props.note._id}`} className="link">
        <h2>{props.note.title}</h2>

        <hr />
        {props.note.textBody}
      </Link>
    </div>
  );
};
