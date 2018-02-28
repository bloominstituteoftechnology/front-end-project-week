import React, { Component } from 'react';
import './App.css';
import CreateNote from './CreateNote';
import List from './List';

class App extends Component {

  render() {
    return (
      <div className="App">
        <div className="Menu">
          <h1 id="title">Lambda<br/> Notes</h1>
          <button onClick={this.viewClick}><b>View Your Notes</b></button><br/>
          <button><b>+ Create New Note</b></button>
        </div>
        <div className="Notes">
          
          <h1>Create New Note:</h1><br/>
          <CreateNote addNote={this.addNote} />
            
        </div>
      
      </div>
    );
  }
}

export default App;
