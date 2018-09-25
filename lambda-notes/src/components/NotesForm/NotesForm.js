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
      <h2>{props.isUpdating ? "Update Note" : "Add New Note"}</h2>
      <form>
        <div className="group">
          <input
            type="text"
            value={props.note.title}
            name="title"
            onChange={props.handleChange}
          />
          <span className="highlight" />
          <span className="bar" />
          <label>Title</label>
        </div>
        <div className="group">
          <input
            type="text"
            value={props.note.textBody}
            name="textBody"
            onChange={props.handleChange}
          />
          <span className="highlight" />
          <span className="bar" />
          <label>textBody</label>
        </div>
        <button className="material-button-raised" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </Fragment>
  );
}

export default NoteForm;
