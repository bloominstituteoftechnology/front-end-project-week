import React from 'react';
import styled from 'styled-components';

// Styles
const DeleteModalContainerStyled = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.3);
  left: auto;
  right: auto;
  top: auto;
  bottom: auto;
  height: 100vh;
  width: 100%;
  padding: 0;
  margin: 0;

  .DeleteModalDialog {
    margin: auto;
    background-color: #ffffff;
    padding: 40px 80px 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 2px solid rgb(151, 151, 151);
  }

  .DeleteModalButtons {
    margin: 20px 0;

    button {
      margin: 0 20px;
      height: 50px;
      width: 150px;
      color: #ffffff;
      font-size: 0.8rem;
      font-weight: bold;
      outline: none;
      border: none;

      &:hover {
       border: 2px solid white;
      }
    }

    .DeleteButton {
      background-color: rgb(191, 40, 40);
    }

    .NoButton {
      background-color: rgb(94, 190, 195);
    }
  }
`;

// DeleteModal Component
const DeleteModal = (props) => {
  return (
    <DeleteModalContainerStyled>
      <div className="DeleteModalDialog">
        <h3>Are you sure you want to delete this?</h3>
        <div className="DeleteModalButtons">
          <button className="DeleteButton" onClick={props.deleteNote}>Delete</button>
          <button className="NoButton" onClick={props.closeDeleteModal}>No</button>
        </div>
      </div>
    </DeleteModalContainerStyled>
  )
}

export default DeleteModal;