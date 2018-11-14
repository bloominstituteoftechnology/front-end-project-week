import React, { Component } from 'react';
import './App.css';
import Sidebar from './components/sidebar'; 
import Notes from './components/Notes'; 

class App extends Component {
  constructor(){
    super(); 
    this.state = {
      notes: ["i am card 1", "i am card 2"]
    }
  }
  render() {
    return (
      <div className="App">
        <div className="sidebar-container">
          <Sidebar />
        </div> 
        <div className="notes-container">
          <Notes notes={this.state.notes} /> 
        </div> 
      </div>
    );
  }
}

export default App;
