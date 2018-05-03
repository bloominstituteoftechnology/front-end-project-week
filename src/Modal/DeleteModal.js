import React, { Component } from 'react';
import Modal from './Modal';

class DeleteModal extends Component {
  constructor(props) {
    super(props);
  this.state = { isOpen: false };
  }

  toggleModal = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <div className="App">
        <button onClick={this.toggleModal}>
          Open the modal
        </button>

        <Modal show={this.state.isOpen}
          onClose={this.toggleModal}>
          Things in the modal
        </Modal>
      </div>
    );
  }
}

export default DeleteModal;