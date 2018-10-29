import React, { Fragment } from 'react';

import './ComponentStyle.css';

function NoteForm(props) {
  function handleSubmit(event) {
    event.preventDefault();

    if (props.isUpdating) {
      props.handleUpdate(props.note.id);
    } else {
      props.handleNew();
    }
  }

  return (
    <Fragment>
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
            onChange={props.handleCHange}
          />
        </div>
        <button onClick={handleSubmit}>
          {props.isUpdating ? 'Update' : 'Save'}
        </button>
      </form>
    </Fragment>
  );
}

export default NoteForm;
