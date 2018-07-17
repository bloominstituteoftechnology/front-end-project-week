import React from 'react';
import styled from 'styled-components'; 

const NoteModal = styled.div`

  .modalBG {
    width: 100vw;
    height: 100vh;
    background-color: ${props => props.theme.color.modalBG};
    opacity: .75;
    position: fixed;
    top: 0;
    left: 0;
  }

  .modal {
    width: ${ props => props.theme.dimensions.noteModal.modalWidth };
    height: ${ props => props.theme.dimensions.noteModal.modalHeight };
    position: fixed;
    left: 50%;
    margin-left: ${ props => (props.theme.dimensions.noteModal.modalWidthNum) / -2 }px;
    opacity: 1;
    top: ${ props => props.theme.dimensions.noteModal.modalYOffSet };
    background-color: ${ props => props.theme.color.modalColor };
    color: ${ props => props.theme.color.modalText };
    border-color: ${ props => props.theme.color.border };
    border-style: solid;
    border-width: ${ props => props.theme.dimensions.noteModal.borderWidth };
  }
`;

export default () => {
  return (
    <NoteModal>
      <div className="modalBG">
      </div>
      <div className="modal">
        BUTTONS
      </div>
    </NoteModal>
  )
}
