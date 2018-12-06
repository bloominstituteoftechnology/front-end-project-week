import React from "react";
import styled from "styled-components";

const BackDrop = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0
  background-color: rgba(0, 0, 0, 0.4);
 
  display: flex;
  align-items: center;
  z-index: 1
`;

const ModalWrapper = styled.div`
  background-color: #fff;
  border-radius: 5px;
  min-width: 50%;
  min-height: 120px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  padding: 2% 0;
  p {
    margin-top: 0;
    margin-bottom: 2.5rem;
    font-size: 1.4rem;
  }

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 50%;
    margin: 0 auto;
  }
`;

const Cancel = styled.button`
  width: 47%;
  padding: 2% 0;
  background-color: #2ac0c4;
  color: #ffffff;
  cursor: pointer;
  font-size: 1.5rem;
  &:hover {
    background-color: #ffffff;
    color: #2ac0c4;
  }
`;

const Delete = styled(Cancel)`
  background-color: #ce0a24;
  &:hover {
    color: #ce0a24;
  }
`;
const Modal = props => {
  if (!props.show) {
    return null;
  }

  return (
    <BackDrop>
      <ModalWrapper>
        <p>Are you sure you want to delete this?</p>
        <div>
          <Delete onClick={props.kill}>Delete</Delete>
          <Cancel onClick={props.close}>Cancel</Cancel>
        </div>
      </ModalWrapper>
    </BackDrop>
  );
};

export default Modal;
