import React from "react";
import { Link } from "react-router-dom";

const Note = props => (
  <div className="note">
    <h3>
      <Link to={`/note/${props.note._id}`}>{props.note.title}</Link>
    </h3>
    <hr />
    <p>{props.note.textBody}</p>
  </div>
);

export default Note;
