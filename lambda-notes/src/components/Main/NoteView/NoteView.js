import React from 'react';
import './NoteView.css';

const NoteView = (props) => { 
  console.log('ListView', props.notes)
  return (
    <div className="container">  
        <span className="top-right"><a href="#" className="edit">edit</a><a href="#" className="delete">delete</a></span>
      <h4 className="text-left pt-5">Note Name</h4>
      <p className="text-left mt-4">lypsum ipsumlypsum ipsum lypsum ipsumlypsum ipsum </p>
    </div> 
  );
}

export default NoteView;