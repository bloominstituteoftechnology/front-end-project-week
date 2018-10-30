import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import './ComponentStyle.css';

function NoteForm(props) {
  function handleSubmit(event) {
    event.preventDefault();

    if (props.isUpdating) {
      props.handleUpdateNote(props.note.id);
    } else {
      props.handleAddNewNote();
    }
  }

  return (
    <Fragment>
      <Link to="/note-form">
        <h2>{props.isUpdating ? 'Edit Note' : 'Create New Note'}</h2>
        <form>
          <div>
            <input
              type="text"
              value={props.note.title}
              placeholder="Note Title"
              name="title"
              onChange={props.handleChange}
            />
          </div>
          <div>
            <input
              type="text"
              value={props.note.textBody}
              palceholder="Note Content"
              name="textBody"
              onChange={props.handleChange}
            />
          </div>
          <button onClick={handleSubmit}>
            {props.isUpdating ? 'Update' : 'Save'}
          </button>
        </form>
      </Link>
    </Fragment>
  );
}

export default NoteForm;
