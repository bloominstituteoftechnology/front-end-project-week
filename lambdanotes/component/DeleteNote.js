import React, { Component } from 'react';
import { Button, Modal, ModalBody, ModalFooter } from 'reactstrap';
import { Link } from 'react-router-dom';

export default class DeleteNote extends Component {
  state = {
    modal: false
  };

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    })
  }

  render() {
    return (
      <div>
        <Button onClick={this.toggle}>{this.props.label}</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalBody d-flex justify-center>
            Are you sure you want to delete this?
          </ModalBody>
          <ModalFooter>
            <Link to={'/'}>
              <Button color="danger" onClick={this.toggle}>Delete</Button>{' '}
            </Link>
            <Button color="info" onClick={this.toggle}>No</Button>
          </ModalFooter>
        </Modal>
      </div>
    )
  }
}