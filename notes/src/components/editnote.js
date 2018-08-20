import React from "react";
import { Link } from "react-router-dom";

const EditNote = props => {
  return (
    <div className="notes-container">
      <h2>Edit Note:</h2>
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
        <Link className="save" to="/">
          <button onClick={() => props.submitEdit(props.match.params.id)}>
            Save
          </button>
        </Link>
      </div>
    </div>
  );
};

export default EditNote;
