import React from "react";
import "./deletemodel.css";
function DeleteModel(props) {
  return (
    <>
      <div className="delete-model-container">
        <div className="delete-model">
          <p>Are you sure you want to delete this?</p>
          <button
            className="button-danger"
            onClick={e => {
              props.deleteNote(e, props.note._id);
              props.deletingToggle(e);
              props.history.push(`/`);
            }}
          >
            Delete
          </button>
          <button
            onClick={e => {
              props.deletingToggle(e);
            }}
          >
            Cancel
          </button>
        </div>
      </div>
    </>
  );
}

export default DeleteModel;
