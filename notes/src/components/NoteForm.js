import React from "react";

const NoteForm = props => {
  return (
    <form className="form">
      <input
        className="input-title"
        type="text"
        value={props.value}
        onChange={props.handleInputTag}
        placeholder="tag"
      />

      <input
        className="input-title"
        type="text"
        value={props.value}
        onChange={props.handleInputTitle}
        placeholder="Title"
      />
      <textarea
        className="input-body"
        type="textarea"
        value={props.value}
        onChange={props.handleInputBody}
        placeholder="Start writing..."
      />
      <button className="hide" onClick={props.handleClick}>
        Save
      </button>
    </form>
  );
};
export default NoteForm;
