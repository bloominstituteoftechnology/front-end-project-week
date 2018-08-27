import React from "react";
import { Link } from "react-router-dom";

const NewNote = props => {
  return (
    <div className="new-note-container">
      <h1>Create New Note:</h1>
      <div className="input">
        <input
          onChange={props.inputHandler}
          name="newnotetitle"
          className="input-title"
          placeholder="Note Title"
        />
        <textarea
          onChange={props.inputHandler}
          name="newnotebody"
          className="input-body"
          placeholder="Note Content"
        />
        <Link className="save" to="/">
          <button onClick={props.noteSubmit}>Save</button>
        </Link>
      </div>
    </div>
  );
};

export default NewNote;
