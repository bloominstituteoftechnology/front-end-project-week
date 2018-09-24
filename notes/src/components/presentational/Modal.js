import React from 'react';
import './modal.css';




function Modal(props) {
  return (
    <div style={{display: props.showModal? 'block': 'none'}} className="modal">
      <div className="modal-main">
        <h5>Are you sure you want to delete this?</h5>
        <button onClick={(event)=>props.deleteClick(event)}>Delete</button>
        <button onClick={props.toggleModal}>No</button>
      </div>
    </div>
  )
}

export default Modal;