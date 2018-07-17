import React from 'react';
import styled from 'styled-components';
import Button from './Button';

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
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: space-around;
    top: ${ props => props.theme.dimensions.noteModal.modalYOffSet };
    background-color: ${ props => props.theme.color.modalColor };
    color: ${ props => props.theme.color.modalText };
    border-color: ${ props => props.theme.color.border };
    border-style: solid;
    border-width: ${ props => props.theme.dimensions.noteModal.borderWidth };
    
    div {
      height: 50%;
    }

    .text {
      display: flex;
      align-items: flex-end;
      p {
        height: 50%;
        font-size: ${ props => props.theme.dimensions.noteModal.promptFontSize };
      }
    }

    .buttons {
      padding: ${ props => props.theme.dimensions.noteModal.buttonOuterPadding };
      width: 100%;
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      
      button {
        margin: 0;
        padding: 0;
      }

    }
  }
`;

export default props => {
  const { yesHandler, noHandler, yesText, noText, prompt } = props;

  return (
    <NoteModal>
      <div className="modalBG">
      </div>
      <div className="modal">
        <div className="text">
          <p>{prompt}</p>
        </div>
        <div className="buttons">
          <Button danger={true} onClick={yesHandler}>Delete</Button>
          <Button onClick={noHandler}>{noText}</Button>
        </div>
      </div>
    </NoteModal>
  )
}
