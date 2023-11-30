import React from 'react';
import {
  StyledBackdrop,
  StyledModal,
  ModalMessage,
  ModalDeleteButton,
  ModalNoButton,
  ModalButtonContainer,
} from './styles';

function ViewNoteModal(props) {
  return (
    <StyledBackdrop showModal={props.showModal}>
      <StyledModal>
        <ModalMessage>Are you sure you want to delete this note?</ModalMessage>
        <ModalButtonContainer>
          <ModalDeleteButton onClick={props.deleteNote}>
            Delete
          </ModalDeleteButton>
          <ModalNoButton onClick={props.displayModal}>No</ModalNoButton>
        </ModalButtonContainer>
      </StyledModal>
    </StyledBackdrop>
  );
}

export default ViewNoteModal;
