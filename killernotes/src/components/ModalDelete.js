import React from 'react';
import styled from 'styled-components';

const Modal = styled.div`
  display: none; 
  position: fixed; 
  z-index: 1; 
  left: 250px;
  top: 300px;
  width: 400px;
  height: 100px; 
  overflow: auto;
  background-color: white;
  > p {
    margin: 5% auto;
    // padding: 20px;
    width: 80%;
  }
}`;

const ModalDelete = props => {
  return (
    <Modal style={props.modal ? { display: 'block' } : null}>
      <p>Are you sure you want to delete this?</p>
      <div>
        <button onClick={props.delete}>Delete</button>
        <button onClick={props.toggleModal}>No</button>
      </div>
    </Modal>
  );
};

export default ModalDelete;
