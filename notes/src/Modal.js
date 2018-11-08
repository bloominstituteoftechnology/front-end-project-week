import React from 'react';
import './Modal.css';


function Modal(props)  {
  const showHideClassName = props.show ? "modal display-block" : "modal display-none";
  return (
    <div className={showHideClassName}>

      <section className="modal-main">
        <h2>Are you sure you want to delete this?</h2>
        <button onClick={props.deleteConfirmed}>Delete</button>
        <button onClick={props.handleClose}>No</button>
      </section>
    </div>
  )
}

export default Modal;