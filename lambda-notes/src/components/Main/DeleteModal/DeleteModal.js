import React, { Component } from 'react';
import './DeleteModal.css';

const DeleteModal = (props) => {
  return (
    <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <h4>Are you sure you want to delete this ?</h4>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-danger">Delete</button>  
            <button type="button" className="btn btn-info" data-dismiss="modal">No</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DeleteModal;