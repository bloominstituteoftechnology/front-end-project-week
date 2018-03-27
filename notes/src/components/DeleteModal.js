import React, { Component } from "react";
import { Button, Modal, ModalBody, ModalFooter } from "reactstrap";

class DeleteModal extends Component {
  constructor() {
    super();
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
        <Button color="link" onClick={this.toggle}>
          Delete
        </Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalBody>Are you sure you want to delete this?</ModalBody>
          <ModalFooter>
            <Button color="danger" onClick={this.toggle}>
              Delete
            </Button>
            <Button color="info" onClick={this.toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default DeleteModal;

// Displays modal to either delete note or cancel
