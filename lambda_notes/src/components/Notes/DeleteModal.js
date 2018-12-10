import React from "react";
import "./Modal.css";

const DeleteModal = props => {
  const showHideClassName = props.show
    ? "modal display-block"
    : "modal display-none";

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        <p>Are you sure you want to delete this?</p>
        <button
          className="delete-btn"
          type="button"
          onClick={e => props.deleteNote(e, props.noteID)}
        >
          Delete
        </button>

        <button className="close-btn" type="button" onClick={props.hideModal}>
          No
        </button>
      </section>
    </div>
  );
};

export default DeleteModal;
