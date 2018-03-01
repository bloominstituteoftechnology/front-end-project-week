import React from 'react';
import { Link } from 'react-router-dom';

export const Modal = props => {
  return (
    <div className="modal-layer-one">
      <div className="modal-layer-two">
        <div className="the-modal">
          <div className="modal-text">
            Are you sure you want to delete this?
          </div>
          <Link to="/" className="each-link" onClick={props.deleteNote}>
            <button className="modal-danger">Delete</button>
          </Link>
          <button className="modal-safe" onClick={props.toggleDelete}>
            No
          </button>
        </div>
      </div>
    </div>
  );
};
