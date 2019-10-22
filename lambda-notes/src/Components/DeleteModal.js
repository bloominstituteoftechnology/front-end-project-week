import React, { Component } from 'react';
import { Modal } from 'reactstrap';
import styled from 'styled-components';

const ModalBox = styled.div`
  // border: 1px solid orange;
`;

const DeleteButton = styled.button`
  width: 50px;
  border-radius: 1px solid gray;
  background: #24b8bd;
  color: white;

  &:hover {
    cursor: pointer;
  }
`;

const PopUpBox = styled.div`
  border: 1px solid black;
  width: 400px;
  height: 200px;
  margin: -400px auto;
`;

const ModalBody = styled.div`
  width: 400px;
  text-align: center;
  margin-top: 30px;
`;

const ModalFooter = styled.footer`
  display: flex;
  justify-content: center;
  margin-top: 40px;
`;

const DeleteDanger = styled.button`
  border: 1px solid gray;
  width: 150px;
  height: 35px;
  background: #CA0B19;
  color: white;
  font-weight: bold;
  font-size: 14px;
  margin-right: 15px;

  &:hover {
    cursor: pointer;
  }
`;

const NoButton = styled.button`
  border: 1px solid gray;
  width: 150px;
  height: 35px;
  background: #24b8bd;
  color: white;
  font-weight: bold;
  font-size: 14px;

  &:hover {
    cursor: pointer;
  }
`;

class DeleteModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };
    
    this.toggle = this.toggle.bind(this);
  }
  
  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    return (
      <ModalBox>
        <DeleteButton onClick={this.toggle}>Delete</DeleteButton>
        
          <Modal 
            isOpen={this.state.modal}
            toggle={this.toogle}
            className={this.props.className}
          >
            <PopUpBox>
              <ModalBody>Are you sure you want to delete this?</ModalBody>
              <ModalFooter>
                <DeleteDanger color='danger' onClick={() => {
                  this.props.handleDelete();
                  this.toggle();
                }}>Delete</DeleteDanger>{' '}
                <NoButton color='info' onClick={this.toggle}>No</NoButton>
              </ModalFooter>
            </PopUpBox>
          </Modal>
        
      </ModalBox>
    );
  }
}

export default DeleteModal;