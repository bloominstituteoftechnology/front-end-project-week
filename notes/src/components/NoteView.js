import React from "react";
import { Link } from "react-router-dom";

function NoteView(props) {
  if (props.note === null) {
    return <h2>Loading Note.....</h2>;
  }
  return (
    <>
      <div>
        <div className="note-edit-bar">
          <div
            onClick={e => {
              props.updateNote(e, props.note);
              props.history.push(`/note/${props.note._id}/edit`);
            }}
          >
            edit
          </div>
          <div
            onClick={e => {
              props.deleteNote(e, props.note._id);
              props.history.push(`/`);
            }}
          >
            delete
          </div>
        </div>
        <h1>{props.note.title}</h1>
        <p>{props.note.textBody}</p>
      </div>
    </>
  );
}

export default NoteView;
