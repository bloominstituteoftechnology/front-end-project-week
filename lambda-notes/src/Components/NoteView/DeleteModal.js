import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalFooter } from 'reactstrap';
import './DeleteModal.css';



class DeleteModal extends Component {
    constructor(props){
        super(props);
        this.state = {
            modal: false
        }
        this.toggle = this.toggle.bind(this);
    }
  
    toggle() {
      this.setState({
        modal: !this.state.modal
      });
    }
  
    render() {
      return (
        <div className = "delete-click-link">
          <a onClick={this.toggle}>delete</a>
          <Modal isOpen={this.state.modal} toggle={this.toggle} className="delete-modal">
            <ModalHeader>Are you sure you want to delete this note?</ModalHeader>
            <ModalFooter>
              <Button className = "delete-button" onClick={this.toggle}>Delete</Button>
              <Button className = "cancel-button" onClick={this.toggle}>No</Button>
            </ModalFooter>
          </Modal>
        </div>
      );
    }
  }
  
  export default DeleteModal;