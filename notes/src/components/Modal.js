import React from "react";
import { BackDrop, ModalWrapper, Cancel, Delete } from "../styled/Modal";

const Modal = props => {
  if (!props.show) {
    return null;
  }

  return (
    <BackDrop>
      <ModalWrapper>
        <p>Are you sure you want to delete this?</p>
        <div>
          <Delete onClick={props.delete}>Delete</Delete>
          <Cancel onClick={props.close}>Cancel</Cancel>
        </div>
      </ModalWrapper>
    </BackDrop>
  );
};

export default Modal;
