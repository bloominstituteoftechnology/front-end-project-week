import React from "react";
import { Link } from "react-router-dom";
import Markdown from "react-markdown";

const NoteCard = props => {
  return (
    <div className="note-card card-hover">
      <Link className="rr-link " to={`/note/${props.note.id}`}>
        <div>
          <h4>{props.note.noteTitle}</h4>
          <div className="card-line" />
          <div className="note-card-body">
            <Markdown source={props.note.noteBody} />
          </div>
        </div>
      </Link>
    </div>
  );
};

export default NoteCard;
