import React from "react";
import EditNoteForm from "./EditNoteForm";
import { Link } from "react-router-dom";

const NoteCard = props => {
  console.log(props);
  return (
    <div className="note-card">
      <Link to={`/note/${props.note._id}`}>
        <h4>{props.note.title}</h4>
      </Link>
      <p>{props.note.textBody}</p>
      <button
        onClick={e => {
          props.deleteNote(e, props.note._id);
        }}
      >
        Delete
      </button>
      {/* <EditNoteForm editNote={props.editNote} id={props.note._id} /> */}
    </div>
  );
};

export default NoteCard;
