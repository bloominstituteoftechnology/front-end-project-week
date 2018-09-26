import React, { Fragment } from "react";

function NoteForm(props) {
  function handleSubmit(event) {
    event.preventDefault();

    if (props.isUpdating) {
      props.handleUpdateNote();
    } else {
      props.handleAddNewNote(event);
    }
  }

  return (
    <Fragment>
      <div className="form-div">
        <h2 className="form-title">
          {props.isUpdating ? "Update Note" : "Add New Note"}
        </h2>
        <form className="note-form">
          <div className="group">
            <input
              className="update-new-input"
              type="text"
              value={props.note.title}
              name="title"
              placeholder="Title"
              onChange={props.handleChange}
            />
          </div>
          <div className="group">
            <input
              className="update-new-input body-input"
              type="text"
              value={props.note.textBody}
              name="textBody"
              placeholder="Note Body"
              onChange={props.handleChange}
            />
          </div>
          <button className="submit-button" onClick={handleSubmit}>
            Submit
          </button>
        </form>
      </div>
    </Fragment>
  );
}

export default NoteForm;
