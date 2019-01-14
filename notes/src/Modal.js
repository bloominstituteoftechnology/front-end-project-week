import React from 'react';
import './Modal.css';


function Modal(props)  {
  const showHideClassName = props.show ? "modal display-block" : "modal display-none";
  return (
    <div className={showHideClassName}>

      <section className="modal-main">
        <h2 className='confirmationQuestion'>Are you sure you want to delete this?</h2>
        <button 
          className='deleteButton'
          onClick={props.deleteConfirmed}
        >
            Delete
        </button>
        <button 
          className='noButton'
          onClick={props.handleClose}
        >
            No
        </button>
      </section>
    </div>
  )
}

export default Modal;