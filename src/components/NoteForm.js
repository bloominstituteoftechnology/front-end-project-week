import React, { Fragment } from 'react';

import './ComponentStyle.css';

function NoteForm(props) {
  function handleSubmit(event) {
    event.preventDefault();
    console.log(props.isUpdating, 'noteform');
    if (props.isUpdating) {
      props.handleUpdateNote(props.note.id);
      props.history.push('/');
    } else {
      props.handleAddNewNote();
      props.history.push('/');
    }
  }

  return (
    <Fragment>
      <div className="note-form-view">
        <h2>{props.isUpdating ? 'Edit Note:' : 'Create New Note:'}</h2>
        <form>
          <div>
            <input
              className="title-input"
              type="text"
              value={props.note.title}
              placeholder="Note Title"
              name="title"
              onChange={props.handleChange}
            />
          </div>
          <div>
            <textarea
              placeholder="Note Content"
              rows="1"
              cols="50"
              wraps="physical"
              className="content-input"
              type="text"
              value={props.note.body}
              name="body"
              onChange={props.handleChange}
            />
          </div>
          <button
            className="button create"
            onClick={event => handleSubmit(event)}
          >
            {props.isUpdating ? 'Update' : 'Save'}
          </button>
        </form>
      </div>
    </Fragment>
  );
}

export default NoteForm;
