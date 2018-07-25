import React from 'react';
import Modal from 'react-modal';
import './Notes.css';

const DeleteModal = props => {
    return (
        <div className="viewnote-container">
          <p className="modal-text">Are you sure you want to delete this?</p>
          <div className="modal-row">
          <button className="modal-delete" onClick={() => props.handleDelete()}>Delete</button>
          <button className="modal-no" onClick={() => props.handleCancel()}>No</button> {/* closes modal */}
          </div>
            </div>
    )
}

export default DeleteModal;