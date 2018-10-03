import React from 'react';
import { ContainerModal, MainModal, Delete, No } from '../Style/styleModal';

function Modal(props) {
  return (
    <ContainerModal style={{ display: props.showModal ? 'block' : 'none' }}>
      <MainModal>
        <h5>Are you sure you want to delete this?</h5>
        <Delete onClick={event => props.deleteClick(event)}>Delete</Delete>
        <No onClick={props.toggleModal}>No</No>
      </MainModal>
    </ContainerModal>
  );
}

export default Modal;
