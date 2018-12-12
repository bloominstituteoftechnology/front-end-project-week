import React from 'react';
import {connect} from 'react-redux';
import {deleteNote, hideModal} from '../store/actions';
import {ModalWrapper, StyledModal, ModalButton} from '../styles';

const Modal = props => {
  return (
    <ModalWrapper>
      <StyledModal>
        <p>Are you sure you want to delete this?</p>
        <div style={{display: 'flex'}}>
          <ModalButton
            delete
            onClick={() => {
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
