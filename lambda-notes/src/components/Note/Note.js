import React, { Fragment } from "react";
import { Route, Link } from "react-router-dom";

function Note(props) {
  const note = props.notesList.find(
    note => note.id === parseInt(props.match.params.noteId, 10)
  );

  function handleDelete() {
    props.handleDeleteNote(note.id);
    props.history.push("/notes");
  }

  if (props.isLoading || props.notesList.length === 0)
    return <h2>Loading data...</h2>;

  return (
    <Fragment>
      <div className="note-info-wrapper">
        <h1>{note.title}</h1>
        <h4>{note.textBody}</h4>
      </div>
      <button
        className="material-button-raised"
        onClick={event => {
          event.preventDefault();
          props.goToUpdateNoteForm(event, note.id);
        }}
      >
        Update Note
      </button>
      <button className="material-button-raised" onClick={handleDelete}>
        Delete Note
      </button>
    </Fragment>
  );
}

export default Note;
