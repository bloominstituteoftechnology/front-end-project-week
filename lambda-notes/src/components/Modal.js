import React from 'react';
import styled from 'styled-components'

const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width:100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  display: ${props => props.show ? 'block' : 'none'};
`

const ModalContent = styled.section`
  position: fixed;
  top:50%;
  left:50%;
  transform: translate(-50%,-59%);
  width: 60%;
  height: 155px;
  text-align: center;
  border: 1px solid #92a7a9;
  background-color: #f2f1f2;
  padding-top: 37px;

  p {
    font-size: 14px;
    padding-bottom: 28px;
  }
`
const StyledButton = styled.button`
  width: 167px;
  padding: 10px 0;
  border: 1px solid gray;
  border-radius: 0;
  font-size: 14px;
  color: white;
  margin: 0 12px;
  background-color: ${props => props.delete ? 'red' : '#58b6bb'}
`

const Modal = ({ handleClose, handleDelete, show, deletingNote }) => {
  return (
  <ModalWrapper show={show}>
    <ModalContent>
    <p>Are you sure you want to delete this?</p>
    <StyledButton delete onClick={handleDelete}>Delete</StyledButton>
    <StyledButton onClick={handleClose}>No</StyledButton>
    {deletingNote && <p>deleting note...</p>}
    </ModalContent>
  </ModalWrapper>
  )
}

export default Modal;