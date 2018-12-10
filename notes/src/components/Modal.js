import React from 'react';
import styled from 'styled-components';

const ModalWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  opacity: 0.4;
  border: 1px solid yellow;
  z-index: 1;
  background-color: gray;
`;

const StyledModal = styled.div`
  width: 25vw;
  height: 25vh;
  margin: auto;
  position: absolute;
  left: 50vw;
  top: 50vh;
  border: 1px solid red;
  z-index: 2;
  display: inline;
`;

const Modal = () => {
  return (
    <ModalWrapper>
      <StyledModal>
        <h2>modal component</h2>
      </StyledModal>
    </ModalWrapper>
  );
};

export default Modal;
