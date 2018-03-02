import React, { Component } from 'react';
import { ButtonToolbar, Modal } from 'react-bootstrap';

class DeleteModal extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleHide = this.handleHide.bind(this);

    this.state = {
      show: false
    };
  }

  handleShow() {
    this.setState({ show: true });
  }

  handleHide() {
    this.setState({ show: false });
  }

  render() {
    return (
      <ButtonToolbar>
          <p 
            onClick={this.handleShow}
            className="delete"
          >
            delete
          </p>

          <Modal
            {...this.props}
            show={this.state.show}
            onHide={this.handleHide}
            dialogClassName="custom-modal"
          >
            <Modal.Body>
              <p>
                Are you sure you want to delete this?
              </p>
              <button className="delete" onClick={this.handleHide}>Delete</button>
              <button onClick={this.handleHide}>Close</button>
            </Modal.Body>
          </Modal>
      </ButtonToolbar>
    );
  }
}

export default DeleteModal;