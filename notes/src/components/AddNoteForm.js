import React from "react";

const AddNoteForm = props => (
  <form className="form">
    <h2>Create New Note:</h2>
    <input
      type="text"
      name="title"
      placeholder="Note Title"
      onChange={props.handleInput}
      value={props.title}
    />
    <textarea
      name="textBody"
      id=""
      cols="30"
      rows="10"
      placeholder="Note Content"
      onChange={props.handleInput}
      value={props.textBody}
    />
    <button>Save</button>
  </form>
);

export default AddNoteForm;
