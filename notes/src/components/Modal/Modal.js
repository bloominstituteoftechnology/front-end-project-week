import React from 'react'
import { StyledBackdrop, StyledModal } from './styles';

function ViewNoteModal(props) {
  return (
    <StyledBackdrop showModal={props.showModal}>
      <StyledModal>
        <h3>Are you sure you want to delete this note?</h3>
        <div onClick={props.deleteNote}>Delete</div>
        <div onClick={props.displayModal}>No</div>
      </StyledModal>
    </StyledBackdrop>
  )
}

export default ViewNoteModal
