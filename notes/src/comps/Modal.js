import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { toggleModal, deleteNote } from '../actions';
import '../styles/Modal.css';

const Modal = props => {
  return (
    <div className="modal">
      <div className="modal__box">
        <div className="modal__box-text">Are you sure you want to delete this?</div>
        <div className="modal__box-buttons">
          <Link to="/" onClick={props.deleteNote} className="modal__box-button delete">
            Delete
          </Link>
          <div onClick={props.toggleModal} className="modal__box-button no">
            No
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    notes: state.notes,
  };
};

export default connect(mapStateToProps, { toggleModal, deleteNote })(Modal);
