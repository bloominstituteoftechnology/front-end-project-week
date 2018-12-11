import React from "react";
import { ActionButton } from "./Styles";
import "./Modal.css";

const DeleteModal = props => {
  const showHideClassName = props.show
    ? "modal display-block"
    : "modal display-none";

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        <p>Are you sure you want to delete this?</p>
        <ActionButton
          style={{ backgroundColor: "#d0011b" }}
          type="button"
          onClick={e => props.deleteNote(e, props.noteID)}
        >
          Delete
        </ActionButton>

        <ActionButton type="button" onClick={props.hideModal}>
          No
        </ActionButton>
      </section>
    </div>
  );
};

export default DeleteModal;
