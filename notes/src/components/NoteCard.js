import React from "react";
import { Link } from "react-router-dom";
import Markdown from "react-markdown";

const NoteCard = props => {
  return (
    <div className="note-card">
      <div>
        <Link className="rr-link" to={`/note/${props.note._id}`}>
          <h4>{props.note.title}</h4>
        </Link>
        <div className="card-line" />
        <div className="note-card-body">
          <Markdown source={props.note.textBody} />
        </div>
      </div>
    </div>
  );
};

export default NoteCard;
