import React from 'react';
import { connect } from 'react-redux';
import { toggleModal } from '../actions';
import '../styles/Modal.css';

const Modal = props => {
  return (
    <div className="modal">
      <div className="modal__box">
        <div>Are you sure you want to delete this?</div>
        <div className="modal__box-buttons">
          <div className="modal__box-button">Delete</div>
          <div onClick={props.toggleModal} className="modal__box-button">No</div>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    notes: state.notes,
  }
}

export default connect(mapStateToProps, { toggleModal })(Modal);