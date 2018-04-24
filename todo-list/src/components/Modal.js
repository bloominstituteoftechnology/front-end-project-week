import React from 'react';

import '../styles/Modal.css';

export const Modal = props => {
  const back = e => {
    e.stopPropagation();
    props.history.goBack();
  };

  return (
    <div className="Modal">
      <div className="Modal_message">
        <p>Are you sure you want to delete this note?</p>
      </div>
      <div className="Modal_buttons">
        <button onClick={back}>Confirm</button>
        <button onClick={back}>Cancel</button>
      </div>
    </div>
  );
}