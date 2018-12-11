import React from "react";
import { Link, Route } from "react-router-dom";
import EditNote from "./EditNote";

const NoteCard = props => {
  return (
    <div>
      <h1>{props.singleNote.title}</h1>
      <p>{props.singleNote.textBody}</p>
      <Link to={`/edit-note/${props.singleNote._id}`}>
        <button>Edit Note</button>
      </Link>
    </div>
  );
};

export default NoteCard;
