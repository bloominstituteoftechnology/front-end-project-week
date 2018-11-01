// This is a standard modal from the reactstrap library

import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

class DeleteModal extends React.Component {
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
        <Button color="danger" onClick={this.toggle}>
          {this.props.buttonLabel}
        </Button>
        <Modal
          isOpen={this.state.modal}
          modalTransition={{ timeout: 700 }}
          backdropTransition={{ timeout: 1300 }}
          toggle={this.toggle}
          className={this.props.className}
        >
          <ModalHeader toggle={this.toggle}>Delete Note</ModalHeader>
          <ModalBody>Are you sure you want to delete this?</ModalBody>
          <ModalFooter>
            <Button color="danger" onClick={this.toggle}>
              DELETE
            </Button>{" "}
            <Button color="info" onClick={this.toggle}>
              NO
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default DeleteModal;
