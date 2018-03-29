import React, { Component } from 'react';
import { connect } from 'react-router-dom';
import { deleteNote } from '../actions';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class DeleteNote extends Component {
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
      <div>
        <Button color="danger" onClick={this.toggle}>{this.props.buttonLabel}</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className="modal-dialog modal-dialog-centered">
          <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
          <ModalBody>
              Are you sure you want to delete this?
          </ModalBody>
          <ModalFooter>
            <Button color="danger" onClick={this.toggle}>Delete</Button>{' '}
            <Button color="primary" onClick={this.toggle}>No</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default DeleteNote;