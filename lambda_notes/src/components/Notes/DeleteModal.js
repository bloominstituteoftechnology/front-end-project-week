import React from "react";
import { ActionButton } from "./Styles";
import "./Modal.css";

const deleteButton = {
  width: "35%",
  margin: "15px",
  border: "1px solid #b7b5b7",
  padding: "15px",
  backgroundColor: "#d0011b",
  fontSize: "1.8rem",
  fontWeight: "bold",
  color: "#fff",
  textDecoration: "none",
  cursor: "pointer"
};

const closeButton = {
  width: "35%",
  margin: "15px",
  border: "1px solid #b7b5b7",
  padding: "15px",
  backgroundColor: "#23b8bd",
  fontSize: "1.8rem",
  fontWeight: "bold",
  color: "#fff",
  textDecoration: "none",
  cursor: "pointer"
};

const DeleteModal = props => {
  const showHideClassName = props.show
    ? "modal display-block"
    : "modal display-none";

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        <p>Are you sure you want to delete this?</p>
        <button
          style={deleteButton}
          type="button"
          onClick={e => props.deleteNote(e, props.noteID)}
        >
          Delete
        </button>

        <ActionButton
          style={closeButton}
          type="button"
          onClick={props.hideModal}
        >
          No
        </ActionButton>
      </section>
    </div>
  );
};

export default DeleteModal;
