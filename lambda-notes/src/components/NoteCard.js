import React from "react";
import "../App.css";
import {Link} from "react-router-dom";

const NoteCard = props => {
  return (
    <Link to={`/${props.note._id}`} className="note-card">
      <div>
        <h2>{props.note.title}</h2> <hr />
        <p>{props.note.textBody}</p>
      </div>
    </Link>
  );
};

export default NoteCard;
