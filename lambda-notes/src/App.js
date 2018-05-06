import React, { Component } from 'react';
import './App.css';
import { NoteCards } from './NoteCards';
import Buttons  from './Buttons';
import Notes from './Notes';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [],
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
              <NoteCards note={this.state.note} notes={this.state.notes} />            
            </div>  
        </div>
      </div>
    );
  }
}

export default App;
