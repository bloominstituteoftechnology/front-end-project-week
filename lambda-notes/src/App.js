import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NoteCards  from './NoteCards';
import Buttons  from './Buttons';

class App extends Component {
  render() {
    return (
      <div className="">        
        <div className="row no-gutters">
          <div className="sideBar col-2">
          <span className="lambdaNotes">Lambda <br /> Notes</span>
          <span className="buttons"><Buttons /></span>
          </div>
            <div className="noteSection col-md-10">
            <span className="yourNotes">Your Notes:</span>
            <NoteCards />              
            </div>  
        </div>
      </div>
    );
  }
}

export default App;
