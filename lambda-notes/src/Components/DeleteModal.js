import React, { Component } from 'react';
import { Button, Modal, ModalBody, ModalFooter } from 'reactstrap';
import styled from 'styled-components';

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
      <div className='modal-container'>
        <button onClick={this.toggle}>Delete</button>
        <Modal 
          isOpen={this.state.modal}
          toggle={this.toogle}
          className={this.props.className}
        >
          <ModalBody>Are you sure you want to delete this?</ModalBody>
          <ModalFooter>
            <Button color='danger' onClick={this.handleDelete}>Delete</Button>{' '}
            <Button color='info' onClick={this.toggle}>No</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default DeleteModal;