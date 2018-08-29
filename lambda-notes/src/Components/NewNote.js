import React from "react";
import { Link } from "react-router-dom";

const NewNote = props => {
  return (
    <div className="note-container">
      <h1>Create New Note:</h1>
      <div className="input">
        <input
          onChange={props.inputHandler}
          name="notetitle"
          className="input-title"
          placeholder="Note Title"
        />
        <textarea
          onChange={props.inputHandler}
          name="notebody"
          className="input-body"
          placeholder="Note Content"
        />
        <Link className="save" to="/">
          <button onClick={props.submitNote}>Save</button>
        </Link>
      </div>
    </div>
  );
};

export default NewNote;
