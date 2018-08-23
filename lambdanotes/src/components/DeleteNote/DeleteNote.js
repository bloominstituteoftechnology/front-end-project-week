import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import './DeleteModal.css';

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
        <Button className="toggle-button" color="danger" onClick={this.toggle}>x</Button>
        <Modal className="custom-modal" isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalBody className="modal-text">
            Are you sure you want to delete this?
          </ModalBody>
          <ModalFooter className="modal-footer">
            <Button className="custom-button" color="danger" onClick={() => this.props.deleteNote(this.props.note)}>Delete</Button>{' '}
            <Button className="custom-button" color="info" onClick={this.toggle}>No</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default DeleteModal;