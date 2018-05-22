import React from 'react';
import './NoteView.css';

const NoteView = (props) => { 
  console.log('ListView', props.notes)
  return (
    <div className="container">  
      <h4 className="heading">Note Name</h4>
      <div className="card note">   
        <div className="card-body">
          <h5 className="card-title">Title </h5>
          <hr />
          <p className="card-text">Message here</p>
        </div>
      </div> 
    </div>
  );
}

export default NoteView;