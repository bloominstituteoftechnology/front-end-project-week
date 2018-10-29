import React, { Fragment } from 'react';

import './ComponentStyle.css';

function Note(props) {
  console.log(props);
  const note = props.notesList.find(
    note => note.id === parseInt(props.match.params.noteId, 10)
  );

  function handleDelete() {
    props.handleDeleteNote(note.id);
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
        <h1>{note.title}</h1>
        <h4>({note.textBody})</h4>
      </div>
    </Fragment>
  );
}

export default Note;
