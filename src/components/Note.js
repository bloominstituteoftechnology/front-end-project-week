import React, { Fragment } from 'react';
import ReactModal from 'react-modal';

import './ComponentStyle.css';

ReactModal.setAppElement('#root');

function Note(props) {
  console.log(props);
  const note = props.notesList.find(
    note => note.id == props.match.params.noteId
  );
  console.log(note);

  function handleDelete() {
    props.handleDeleteNote(note.id);
    props.history.push(`/`);
  }
  console.log(props);
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
        <button className="note-button" onClick={props.handleOpenModal}>
          Delete
        </button>

        <ReactModal
          isOpen={props.showModal}
          contentLabel="Minimal Modal Example"
          className="modal-style"
        >
          <div className="confirm">Are you sure you want to delete this?</div>
          <div className="button-row">
            <button className="delete" onClick={handleDelete}>
              Delete
            </button>
            <button className="button" onClick={props.handleCloseModal}>
              No
            </button>
          </div>
        </ReactModal>

        {/* <button className="note-button" onClick={handleDelete}>
          Delete
        </button> */}

        <div>
          <h1 className="note-name">{note.title}</h1>
          <h4 className="note-body">{note.body}</h4>
        </div>
      </div>
    </Fragment>
  );
}

export default Note;
