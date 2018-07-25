import React, { Component } from 'react';
import * as actions from '../../Actions';
import Modal from 'react-modal';
import './Notes.css';

this.handleOpenModal = this.handleOpenModal.bind(this);
this.handleCloseModal = this.handleCloseModal.bind(this);

const DeleteModal = props => {
    return (
        <div className="viewnote-container">
          <p className="modal-text">Are you sure you want to delete this?</p>
          <div className="modal-row">
          <button className="modal-delete" onClick={() => props.handleDelete()}>Delete</button>
          <button className="modal-no" onClick={() => props.handleCancel()}>No</button> {/* closes modal */}
          </div>
            <h2 className="view-header">Note Name</h2>
            <p className="viewnote-p">Bunch of random words that mean nothing just here to fill space on boxes for MVP. Think I might need a few more. That oughta do it. Bunch of random words that mean nothing just here to fill space on boxes for MVP. Think I might need a few more. That oughta do it. Bunch of random words that mean nothing just here to fill space on boxes for MVP. Think I might need a few more. That oughta do it.</p>
            <br />
            <p className="viewnote-p">Bunch of random words that mean nothing just here to fill space on boxes for MVP. Think I might need a few more. That oughta do it. Bunch of random words that mean nothing just here to fill space on boxes for MVP. Think I might need a few more. That oughta do it. Bunch of random words that mean nothing just here to fill space on boxes for MVP. Think I might need a few more. That oughta do it.</p>
            </div>
    )
}

export default DeleteModal;