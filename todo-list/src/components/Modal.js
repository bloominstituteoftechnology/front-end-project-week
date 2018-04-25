import React from 'react';

import '../styles/Modal.css';

export const Modal = props => {
  const back = e => {
    e.stopPropagation();
    props.history.goBack();
  };

  return (
    <div className="Modal">
      <div className="Modal_body">
        <div className="Modal_message">
          <p>Are you sure?</p>
        </div>
        <div className="Modal_buttons">
          <button onClick={back} className="App_button">Confirm</button>
          <button onClick={back} className="App_button">Cancel</button>
        </div>
      </div>
    </div>
  );
}