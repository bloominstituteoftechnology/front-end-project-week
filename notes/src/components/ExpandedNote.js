import React from "react";

function ExpandedNote(props) {
  return (
    <>
      <div className="noteview-container">
        <div className="note-edit-bar">
          <div
            className="nav-link"
            onClick={e => {
              props.updateNote(e, props.note);
              props.history.push(`/note/${props.note._id}/edit`);
            }}
          >
            edit
          </div>
          <div
            className="nav-link"
            onClick={e => {
              props.deletingToggle(e);
            }}
          >
            Delete
          </div>
        </div>
        <h1>{props.note.title}</h1>
        <p>{props.note.textBody}</p>
      </div>
    </>
  );
}

export default ExpandedNote;
