import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { deleteNote } from '../actions';
import './Modal.css';

class Modal extends Component {

  cancelModal = () => {
    const modal = document.getElementsByClassName('modalContainer')[0];
    modal.style.display = 'none';
  }

  deleteConfirmed = () => {
    const id = +this.props.match.params.number;
    this.props.deleteNote(id);
    this.props.history.push('/');
  }

  render() {
    return (
      <div className="modalContainer">
        <div className="modalBanner">
          <p className="modalText">Are you sure you want to delete this?</p><br />
          <div className="buttonContainer">
            <button className="deleteButton" onClick={() => { this.deleteConfirmed() }}>Delete</button>
            <button className="cancelButton" onClick={() => { this.cancelModal() }}>No</button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  noteData: state,
});

export default connect(mapStateToProps, { deleteNote })(withRouter(Modal));
