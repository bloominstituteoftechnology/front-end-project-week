import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Modal.css';

export const Modal = props => {
  const id = Number(props.match.params.id);

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
          <Link to="/" className="App_button" 
            onClick={() => props.useFunction(id)}>Confirm</Link>
          <button onClick={back} className="App_button">Cancel</button>
        </div>
      </div>
    </div>
  );
}