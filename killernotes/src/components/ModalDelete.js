import React from 'react';
import styled from 'styled-components';

const OuterDiv = styled.div`
  display: none;
  position: fixed;
  z-index: 1;
  left: 0px;
  top: 0px;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(211, 210, 211, 0.9);
`;

const Modal = styled.div`
  display: none;
  position: fixed;
  z-index: 1;
  left: 190px;
  top: 184px;
  width: 531px;
  height: 178px;
  overflow: auto;
  background-color: white;
  > p {
    margin: 5% auto;
    // padding: 20px;
    width: 53%;
  }
`;

const Button = styled.button`
  margin-left: 68px;
  margin-top: 20px;
  width: 190px;
  height: 42px;
  font-size: 16px;
  background-color: #d0021b;
`;

const NoButton = Button.extend`
  background-color: #2bc1c4;
  margin-left: 22px;
`;

const ModalDelete = props => {
  return (
    <OuterDiv style={props.modal ? { display: 'block' } : null}>
      <Modal style={props.modal ? { display: 'block' } : null}>
        <p>Are you sure you want to delete this?</p>
        <div>
          <Button onClick={props.delete}>Delete</Button>
          <NoButton onClick={props.toggleModal}>No</NoButton>
        </div>
      </Modal>
    </OuterDiv>
  );
};

export default ModalDelete;
