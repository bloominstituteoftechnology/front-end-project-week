import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import './Notes.css';

// Will need to route "edit" and "delete parts" eventually

class DeleteModal extends Component {
    constructor () {
        super();
        this.state = {
          showModal: false
        };
        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
      }
      
      handleOpenModal() {
        this.setState({ showModal: true });
      }
      
      handleCloseModal() {
        this.setState({ showModal: false });
      }
    render(){
    return (
        <div className="viewnote-container">
        <div className="edit-delete">
        <a href="#">edit{' '}</a>
        <a href="#" onClick={this.handleOpenModal}>{' '}delete</a>
        </div>
        <Modal 
           isOpen={this.state.showModal}
           contentLabel="onRequestClose Example"
           onRequestClose={this.handleCloseModal}
           className="Modal"
           overlayClassName="Overlay"
        >
          <p className="modal-text">Are you sure you want to delete this?</p>
          <div className="modal-row">
          <button className="modal-delete">Delete</button>
          <button className="modal-no" onClick={this.handleCloseModal}>No</button>
          </div>
        </Modal>
            <h2 className="view-header">Note Name</h2>
            <p className="viewnote-p">Bunch of random words that mean nothing just here to fill space on boxes for MVP. Think I might need a few more. That oughta do it. Bunch of random words that mean nothing just here to fill space on boxes for MVP. Think I might need a few more. That oughta do it. Bunch of random words that mean nothing just here to fill space on boxes for MVP. Think I might need a few more. That oughta do it.</p>
            <br />
            <p className="viewnote-p">Bunch of random words that mean nothing just here to fill space on boxes for MVP. Think I might need a few more. That oughta do it. Bunch of random words that mean nothing just here to fill space on boxes for MVP. Think I might need a few more. That oughta do it. Bunch of random words that mean nothing just here to fill space on boxes for MVP. Think I might need a few more. That oughta do it.</p>
            </div>
    )
}
}

export default DeleteModal;