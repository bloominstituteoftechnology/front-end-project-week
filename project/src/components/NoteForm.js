import React, { Fragment } from "react";

const NoteForm = props => {
  const handleSubmit = event => {
    if (props.isUpdating) {
      props.handleUpdateNote();
    } else {
      props.handleAddNewNote(event);
    }
  };

  return (
    <Fragment>
      <h2>{props.isUpdating ? "Update Note" : "Add New Note"}</h2>
      <form>
        <div>
          <input
            type="text"
            placeholder="Enter Title"
            value={props.note.title}
            name="name"
            onChange={props.handleChange}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Enter Text"
            value={props.note.textBody}
            name="textBody"
            onChange={props.handleChange}
          />
        </div>
        <button onClick={handleSubmit}>Submit</button>
      </form>
    </Fragment>
  );
};

export default NoteForm;
