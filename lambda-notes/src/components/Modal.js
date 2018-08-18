import React from 'react';
import styled from 'styled-components'

const ModalWrapper = styled.div`
  display: ${props => props.show ? 'block' : 'none'};
`

const ModalContent = styled.section`
  position: fixed;
  top:50%;
  left:50%;
  transform: translate(-50%,-50%);
  width: 60%;
  height: auto;
`

const Modal = ({ handleClose, handleDelete, show, deletingNote }) => {
  return (
  <ModalWrapper show={show}>
    <ModalContent>
    <p>Are you sure you want to delete this?</p>
    <button onClick={handleDelete}>Delete</button>
    <button onClick={handleClose}>No</button>
    {deletingNote && <p>deleting note...</p>}
    </ModalContent>
  </ModalWrapper>
  )
}

export default Modal;