import React, { Component } from 'react';
import { Button, Modal } from 'react-bootstrap';

class DeleteModal extends Component {
  constructor(props, context) {
    super (props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleShow = this.handleClose.bind(this);

    this.state = {
      show: false
    };
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  render() {
    return (
      <div>
        <Button bsStyle="primary" bsSize="small" onClick={this.handleShow}>delete</Button>
              
        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closebutton>
          </Modal.Header>
          <Modal.Body>
            <p>Are you sure you want to delete this?</p>
            <Button onClick={this.handleClose}>Delete</Button>
            <Button onClick={this.handleClose}>Close</Button>
          </Modal.Body>
          <Modal.Footer>
          </Modal.Footer>
        </Modal>
      </div>
    )
  }
}

export default DeleteModal;