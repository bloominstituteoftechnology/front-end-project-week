import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Link } from "react-router-dom";
import styled from 'styled-components'

const NoteButton = styled.button`
    color: white;
    background: #24b8bd;
    margin: 10px;
    border: 2px solid #56aaad; 
    font-size: 12px;
`

const ModalText = styled.div`
  text-align: center;
  margin-top: 40px;
`

const DeleteButton = styled.button`
    width: 175px;
    background: #ca001a;
    color: white;
    font-weight: bold;
    height: 40px;
    margin: 20px 10px 40px;
`

const NoDeleteButton = styled.button`
    width: 175px;
    background: #24b8bd;
    color: white;
    font-weight: bold;
    height: 40px;
    margin: 20px 10px 40px;
`

const Footer = styled.div`
  border-top: 0;
  display: flex;
  justify-content: center;
`

class DeleteModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        modal: false,
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
      <div>
         <NoteButton color="info" onClick={this.toggle}>DELETE</NoteButton>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalText>
            Are you sure you want to delete this?
          </ModalText>
          <Footer>
            <Link to='/'><DeleteButton color="danger" onClick={(event) => {this.toggle(); this.props.deleteHandler(this.props.match.params.id); this.props.history.push('/'); event.preventDefault();}}>Delete</DeleteButton>{' '}</Link>
            <NoDeleteButton color="info" onClick={this.toggle}>No</NoDeleteButton>
          </Footer>
        </Modal>
      </div>
    );
  }
}

export default DeleteModal;