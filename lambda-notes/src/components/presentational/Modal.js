import React from "react";
import {
  ModalContainer,
  ModalContent,
  DeleteButton,
  NoButton
} from "../styling/ModalStyling";

function Modal(props) {
  return (
    <ModalContainer style={{ display: props.showModal ? "block" : "none" }}>
      <ModalContent>
        <h5>Are you sure you want to delete this?</h5>
        <DeleteButton onClick={event => props.deleteClick(event)}>
          Delete
        </DeleteButton>
        <NoButton onClick={props.toggleModal}>No</NoButton>
      </ModalContent>
    </ModalContainer>
  );
}

export default Modal;