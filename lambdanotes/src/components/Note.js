import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import './ComponentStyle.css';

function Note(props) {
  console.log(props);
  const note = props.notesList.find(
    note => note._id === props.match.params.noteId
  );
  console.log(note);
  function handleDelete() {
    props.handleDeleteNote(note._id);
    props.history.push('/note');
  }

  return (
    <Fragment>
      <button
        onClick={event => {
          event.preventDefault();
          props.goToUpdateNoteForm(note);
        }}
      >
        Edit
      </button>
      <button onClick={handleDelete}>Delete</button>
      <div>
        <Link to={`/${note._id}`}>
          <h1>{note.title}</h1>
          <h4>({note.textBody})</h4>
        </Link>
      </div>
    </Fragment>
  );
}

export default Note;
