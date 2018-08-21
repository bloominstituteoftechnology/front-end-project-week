import React from "react";
import { Link } from "react-router-dom";

const EditNote = props => {
  return (
    <div className="notes-container">
      <h1>Edit Note:</h1>
      <div className="input">
        <input
          onChange={props.noteInput}
          name="edittitle"
          className="input-title"
          defaultValue={props.edittitle}
        />
        <textarea
          onChange={props.noteInput}
          name="editbody"
          className="input-body"
          defaultValue={props.editbody}
        />
        <Link className={props.pink ? "save savepink": props.blue ? "save saveblue": "save"} to="/">
          <button onClick={() => props.submitEdit(props.match.params.id)}>
            Save
          </button>
        </Link>
      </div>
    </div>
  );
};

export default EditNote;
