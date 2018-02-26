import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="Menu">
          <h1 id="title">Lambda<br/> Notes</h1>
          <button><b>View Your Notes</b></button><br/>
          <button><b>+ Create New Note</b></button>
        </div>
        <div className="Notes">
          <h1>Create New Note:</h1>
            
        </div>
      
      </div>
    );
  }
}

export default App;
