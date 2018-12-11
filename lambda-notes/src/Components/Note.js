import React from "react";
import { Link } from "react-router-dom";



const Note = props => (
  <div className="note">
    <h3>
      <Link to={`/note/${props.note.id}`} className="note-title">
        {props.note.title}
      </Link>
      <hr />
    </h3>
    <p>{props.note.textBody}</p>
  </div>
);

export default Note;

//{`/note/${props.note._id}`}