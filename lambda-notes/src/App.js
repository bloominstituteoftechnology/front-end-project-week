import React, { Component } from 'react';
import './App.css';
import { NoteCards } from './NoteCards';
import Buttons  from './Buttons';
import Notes from './Notes';

class App extends Component {
  constructor() {
    super();
    this.state = {
      notes: [],
      id: 0
    };
  }

  componentDidMount() {
    this.setState({ notes: Notes });
  }

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
              <NoteCards key={this.state.id} notes={this.state.notes} />            
            </div>  
        </div>
      </div>
    );
  }
}

export default App;
