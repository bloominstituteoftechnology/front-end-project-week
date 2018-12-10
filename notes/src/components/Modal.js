import React from 'react';
import styled from 'styled-components';
//import Button from './NavBar';
import {connect} from 'react-redux';
import {deleteNote, hideModal} from '../store/actions';

const ModalWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  background-color: rgba(0, 0, 0, 0.4);
`;

const StyledModal = styled.div`
  width: 20%;
  height: auto;
  position: fixed;
  top: 50%;
  left: 50%;
  //transform: translate(-50, -50%);
  border: 1px solid red;
  background-color: #ffffff;
  z-index: 2;
  padding: 10px;
`;

// for some reason import buttons from NavBar is displaying the entire navbar when i use them here??
const Button = styled.button`
  background-color: #2ac0c4;
  color: white;
  padding: 10px;
  font-weight: bold;
  font-size: 18px;
  width: 100%;
  margin: 10px;
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
          <Button
            style={{backgroundColor: 'red'}}
            onClick={() => {
              console.log('click');
              props.deleteNote(props.id);
              props.hideModal();
              props.history.push('/notes');
            }}>
            Delete
          </Button>
          <Button onClick={() => props.hideModal()}>No</Button>
        </div>
      </StyledModal>
    </ModalWrapper>
  );
};

export default connect(
  null,
  {deleteNote, hideModal},
)(Modal);
