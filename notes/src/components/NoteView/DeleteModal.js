import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

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
      <div>
        <p onClick={this.toggle}>delete</p>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>A Challenger Appears!</ModalHeader>
          <ModalBody>
            Henlo (OvO")
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>Oh, sorry!</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Leave</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default DeleteModal;