import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';

import './ComponentStyle.css';

function Note(props) {
  console.log(props);
  const note = props.notesList.find(
    note => note._id == props.match.params.noteId
  );
  console.log(note);
  function handleDelete() {
    props.handleDeleteNote(note._id);
    props.history.push(`/note`);
  }

  return (
    <Fragment>
      <div className="single-note">
        <button
          className="note-button"
          onClick={event => {
            event.preventDefault();
            props.goToUpdateNoteForm(note);
          }}
        >
          Edit
        </button>
        <button className="note-button" onClick={handleDelete}>
          Delete
        </button>
        <div>
          <h1 className="note-name">{note.title}</h1>
          <h4 className="note-body">{note.textBody}</h4>
        </div>
      </div>
    </Fragment>
  );
}

export default Note;
