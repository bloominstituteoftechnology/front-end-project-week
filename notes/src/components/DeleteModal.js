import React, { Component } from "react";
import { Button, Modal, ModalBody, ModalFooter } from "reactstrap";
import "./css/DeleteModal.css";

class DeleteModal extends Component {
  constructor() {
    super();
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  render() {
    return (
      <div className="modalbox">
        <div>
          <Button color="link" onClick={this.toggle}>
            <div className="modalbox__ele"> Delete </div>
          </Button>
        </div>
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalBody>
            <div className="modalbox__ele--font">
              Are you sure you want to delete this?
            </div>
          </ModalBody>
          <ModalFooter>
            <Button color="danger" onClick={this.toggle}>
              <div className="modalbox__ele--font">Delete</div>
            </Button>
            <Button color="info" onClick={this.toggle}>
              <div className="modalbox__ele--font">Cancel</div>
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }
}

export default DeleteModal;

// Displays modal to either delete note or cancel
