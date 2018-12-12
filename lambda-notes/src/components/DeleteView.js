import React from 'react';
import { NavLink } from 'react-router-dom';
import '../App.css';

const DeleteView = props => {
 console.log('checking if history is here', props.history)
  return (
    <div className="delete-view">
      <div className="delete-box">
        <h3>Are you 100% positive you want to delete this Note?</h3>
        <div className="btn-container">
            <NavLink to="/" onClick={(event) => {
                props.deleteNote(event, props._id);
                props.history.push('/');
                }}
                className="nav-link nav-link-sm nav-link-red">100% Positive</NavLink>
            <button onClick={props.toggleDeleteView} className="nav-link nav-link-sm nav-link-sm-height">Negative</button>
        </div>
      </div>
    </div>
  );
};



export default DeleteView;