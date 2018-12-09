// importing libraries
import React from 'react';
import styled from 'styled-components';

// styled Modal
const ModalWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  
  .background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    opacity: .75;
    background-color: gray;
  }

  .content {
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 50rem;
    height: 20rem;
    background-color: white;
    padding: 4rem 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid #424142;

    h3 {
      margin-bottom: 3rem;
    }

    button {
      min-width: 18rem;
      margin: 0 2rem;
      font-size: 1.6rem;
      font-weight: bold;
      padding: 1rem;
      background-color: #24B8BD;
      color: white;
      border: 1px solid #424142;
      cursor: pointer;

      &.red {
        background-color: #CA001A;
      }
    }
  }
`;

const Modal = ({ toggleModal, deleteNote, note, history }) => {
  return (
    <ModalWrapper>
      <div className="background"></div>
      <div className="content">
        <div className="content-header">
          <h3>Are you sure you want to delete this?</h3>
        </div>
        <div className="content-buttons">
          <button 
            onClick={ () => {
              deleteNote(note._id);
              history.push('/');
            }}
            className="red"
          >
            Delete
          </button>
          <button onClick={ toggleModal }>No</button>
        </div>
      </div>
    </ModalWrapper>
  );
}
 
export default Modal;