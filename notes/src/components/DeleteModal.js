import React from 'react';
import styled from 'styled-components';

const DeleteModalWrapper = styled.div`
  background: #a2a1a1cc;
  height: 100vh;
  width: 100vw;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: start;
  padding-top: 10rem;

`;
const DeleteModalPop = styled.div`
  background: #FFFFFF;
  border: 1px solid black;
  padding: 2.8rem;

  p {
    padding-bottom: 1.4rem;
    text-align: center;
  }
`;
const Options = styled.div`
  display: flex;

  button {
    color: white;
    font-weight: bold;
    background: #D0011B;
    padding: 10px;
    text-align: center;
    font-size: 1rem;
    border: 1px solid gray;
    width: 200px;

    &:last-child {
      margin-left: 1.4rem;
      background: #30B8BC;
    }
  }
`;


const DeleteModal = (props) => {
  return (
    <DeleteModalWrapper>
      <DeleteModalPop>
        <p>Are you sure you want to delete this?</p>
        <Options>
          <button onClick={() => props.deleteThisNote()}>Delete</button>
          <button onClick={() => props.closeModal()}>No</button>
        </Options>
      </DeleteModalPop>
    </DeleteModalWrapper>
  )
}

export default DeleteModal;