import React from 'react';
import styled from 'styled-components';
import {Button} from './NavBar';
import {connect} from 'react-redux';
import {deleteNote, hideModal} from '../store/actions';

const ModalWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  background-color: rgba(0, 0, 0, 0.6);
`;

const StyledModal = styled.div`
  width: 40%;
  height: auto;
  position: fixed;
  top: 20%;
  left: 30%;
  //transform: translate(-50, -50%);
  border: 1px solid red;
  background-color: #ffffff;
  z-index: 2;
  padding: 40px;
`;

const ModalButton = styled(Button)`
  margin: 10px;
  background-color: ${props => (props.delete ? '#CA001A' : null)};
  padding: 10px 20px;
`;

//const deleteNoteButton = id => {
//props.deleteNote(id);
//props.hideModal();
//};

const Modal = props => {
  return (
    <ModalWrapper>
      <StyledModal>
        <p>Are you sure you want to delete this?</p>
        <div style={{display: 'flex'}}>
          <ModalButton
            delete
            onClick={() => {
              console.log('click');
              props.deleteNote(props.id);
              props.hideModal();
              props.history.push('/notes');
            }}>
            Delete
          </ModalButton>
          <ModalButton onClick={() => props.hideModal()}>No</ModalButton>
        </div>
      </StyledModal>
    </ModalWrapper>
  );
};

export default connect(
  null,
  {deleteNote, hideModal},
)(Modal);
