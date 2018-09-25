import React from 'react';
// import logo from './logo.svg';
import './NoteView.css';
import Notes from './Notes';


const noteView = () => {
  return (
      <div className="cards-container">
        <div className="statement">
        <h2>Your Notes:</h2>
        </div>
        <div className="cards">
        <Notes/>
        </div>
      </div>
    );
  }

export default noteView;