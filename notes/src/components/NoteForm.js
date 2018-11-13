import React from "react";

const NoteForm = props => {
  return (
    <form className="form">
      <input
        className="input-title"
        type="text"
        name="tags"
        value={props.value}
        onChange={props.handleInput}
        placeholder="tag"
      />

      <input
        className="input-title"
        type="text"
        name="title"
        value={props.value}
        onChange={props.handleInput}
        placeholder="Title"
      />
      <textarea
        className="input-body"
        type="textarea"
        name="textBody"
        value={props.value}
        onChange={props.handleInput}
        placeholder="Start writing..."
      />
      <button className="hide" onClick={props.handleClick}>
        Save
      </button>
    </form>
  );
};
export default NoteForm;
