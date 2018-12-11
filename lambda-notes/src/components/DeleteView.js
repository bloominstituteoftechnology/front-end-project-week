import React from 'react';
import '../App.css';

const DeleteView = props => {
  return (
    <div className="delete-view">
      <div className="delete-box">
        <h3>Are you 100% positive you want to delete this Note?</h3>
        <div className="btn-container">
            <button className="nav-link nav-link-sm nav-link-red">100% Positive</button>
            <button onClick={props.toggleDeleteView} className="nav-link nav-link-sm nav-link-sm-height">Negative</button>
        </div>
      </div>
    </div>
  );
};



export default DeleteView;