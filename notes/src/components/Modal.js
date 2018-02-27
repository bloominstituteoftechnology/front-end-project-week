import React from 'react';
import { connect } from 'react-redux';
import { deleteNote, toggleModal } from '../actions';

class Modal extends React.Component {

  handleDeleteNote = () => {
    this.props.deleteNote(this.props.modal.deleteId);
    this.props.history.push('/');
  }

  render() {
    return (
      <div className="modal-bg">
        <div className="modal-box">
          <div className="modal-title">Are you sure you want to delete this?</div>
          <div className="modal-buttons">
            <button className="modal-delete" onClick={() => {this.handleDeleteNote()}}>Delete</button>
            <button className="modal-cancel" onClick={() => {this.props.toggleModal()}}>No</button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
  	modal: state.notes.modal
  } 
}

export default connect(mapStateToProps, { deleteNote, toggleModal })(Modal);