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
    width: 40%;
    height: auto;
    top: 30%;
    left: 50%;
    transform: translate(-50%, -50%);
    border: 1px solid black;
    display: flex;
    flex-direction: column;
  }

  .display-block {
    display: block;
  }

  .display-none {
    display: none;
  }

  .delete-warning {
    margin: 5px auto 10px;
    padding: 15px;
  }

  .delete-button {
    display: flex;
    justify-content: space-around;
  }

  .button {
    width: 25%;
    padding: 5px;
    margin-bottom: 15px;
    color: white;
    font-weight: bold;
  }

  .yes {
    background-color: red;
  }

  .no {
    background-color: green;
  }
`;

const DeleteModal = props => {
  const showHideClassName = props.show
    ? "modal display-block"
    : "modal display-none";
  return (
    <ModalDiv>
      <div className={showHideClassName}>
        <section className="modal-main">
          <h3 className="delete-warning">
            Are you sure you want to delete this?
          </h3>
          <div className="delete-button">
            <button className="yes button" onClick={props.deleteHandler}>
              Delete
            </button>
            <button className="no button" onClick={props.hideModal}>
              No
            </button>
          </div>
        </section>
      </div>
    </ModalDiv>
  );
};

export default DeleteModal;
