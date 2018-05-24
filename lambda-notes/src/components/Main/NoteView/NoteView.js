import React from 'react';
import './NoteView.css';

import {
  Link,
} from 'react-router-dom';

const NoteView = (props) => { 
  console.log('ListView', props.notes)
  return (
    <div className="container">  
      <span className="top-right">
        <Link to="/edit-note">
          <span className="edit"> edit</span>
        </Link >
        <Link to="/delete-note">
          <span className="delete" data-toggle="modal" data-target="#exampleModal">delete</span>
        </Link>
      </span>
      <h4 className="text-left pt-5">Title: {props.notes.title}</h4>
      <p className="text-left mt-4">Message: {props.notes.message}</p>
    </div> 
  );
}

export default NoteView;