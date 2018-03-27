import React from 'react';
import './NoteView.css';

const NoteView = () => (
  <div className="noteViewContainer">
    <div className="linkContainer">
      <a href='#' className="link">edit</a>
      <a href='#' className="link">delete</a>
    </div>
    <h2 className="noteViewHeader">Note Name</h2>
    <p className="noteViewBody"></p>
  </div>
);

export default NoteView;
