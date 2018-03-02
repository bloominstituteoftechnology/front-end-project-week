import React from "react";
import { connect } from "react-redux";

function DeleteModal(props) {
  return (
    <div className="delete-modal">
      <div className="modaltext">Are you sure you want to delete this?</div>
      <div className="button">
        <button onClick={props.deleteNote} className="button button--red">
          Delete
        </button>
        <button onClick={props.cancelDelete} className="button button--teal">
          No
        </button>
      </div>
    </div>
  );
}

export default connect()(DeleteModal);
