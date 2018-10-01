import React from 'react';
import '../Style/styleModal';

function Modal(props) {
  return (
    <div>
      <div>
        <h5>Are you sure you want to delete this note?</h5>
        <button onClick={event => props.deleteClick(event)}>Delete</button>
        <button onClick={props.toggleModal}>No</button>
      </div>
    </div>
  );
}

export default Modal;
