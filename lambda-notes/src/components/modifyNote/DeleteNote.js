import React, { Component } from "react";
import { Link } from "react-router-dom";

export class DeleteNote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false
    };
    // got to bind here to make 'this' work in callback
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  handleOpenModal() {
    this.setState({ showModal: true });
  }

  handleCloseModal() {
    this.setState({ showModal: false });
  }

  render() {
    return (
      <div className="deleteNoteDiv">
        <button onClick={this.handleOpenModal}>Delete</button>
        <ReactModal
          isOpen={this.state.showModal}
          contentLabel="Minimal Modal Example"
        >
          <button onClick={this.handleCloseModal}>Close Modal</button>
        </ReactModal>
      </div>
    );
  }
}
