import React, { Fragment } from 'react';
import ReactModal from 'react-modal';

import './ComponentStyle.css';

function Note(props) {
  console.log(props);
  const note = props.notesList.find(
    note => note._id == props.match.params.noteId
  );
  console.log(note);
  function handleDelete() {
    props.handleDeleteNote(note._id);
    props.history.push(`/`);
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
        {/* <ReactModal
          isOpen={this.state.showModal}
          contentLabel="onRequestCloseExample"
          onRequestClose={this.handleCloseModal}
          className="modal"
          overlayClassName="overlay"
        >
          <p>Are you sure you want to delete this?</p> */}
        <button className="note-button" onClick={handleDelete}>
          Delete
        </button>
        {/* <button onClick={this.handleCloseModal} className="not-delete">
            No
          </button>
        </ReactModal> */}
        <div>
          <h1 className="note-name">{note.title}</h1>
          <h4 className="note-body">{note.textBody}</h4>
        </div>
      </div>
    </Fragment>
  );
}

export default Note;
