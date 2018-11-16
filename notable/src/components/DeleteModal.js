import React from "react";
import styled from "styled-components";

const ModalDiv = styled.div`
  .modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.6);
  }

  .modal-main {
    position: fixed;
    background: white;
    width: 80%;
    height: auto;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border: 1px solid black;
  }

  .display-block {
    display: block;
  }

  .display-none {
    display: none;
  }
`;

const DeleteModal = props => {
  const showHideClassName = props.show
    ? "modal display-block"
    : "modal display-none";
  return (
    <ModalDiv className={showHideClassName}>
      {console.log(showHideClassName)}
      <section className="modal-main">
        Some Stuff
        <button onClick={props.hideModal}>close</button>
      </section>
    </ModalDiv>
  );
};

export default DeleteModal;
