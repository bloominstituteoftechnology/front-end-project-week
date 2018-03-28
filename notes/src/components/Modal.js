import React, { Component } from 'react';
import './Modal.css';

class Modal extends Component {

  cancelModal = () => {
    const modal = document.getElementsByClassName('modalContainer')[0];
    modal.style.display = 'none';
  }

  render() {
    return (
      <div className="modalContainer">
        <div className="modalBanner">
          <p className="modalText">Are you sure you want to delete this?</p><br />
          <div className="buttonContainer">
            <button className="deleteButton" onClick={() => { alert('Not implemented yet!') }}>Delete</button>
            <button className="cancelButton" onClick={() => { this.cancelModal() }}>No</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;
