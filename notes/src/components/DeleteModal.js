import React from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class DeleteView extends React.Component {
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
        <button color="danger" onClick={this.toggle}>{this.props.buttonLabel}</button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalBody>
            Are you sure you want to delete this note?
          </ModalBody>
          <ModalFooter>
            <button color="primary" onClick={this.toggle}>Delete</button>{' '}
            <button color="secondary" onClick={this.toggle}>Cancel</button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default DeleteView;