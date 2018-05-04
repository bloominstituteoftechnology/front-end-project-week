import React, { Component } from 'react';
import './App.css';
import Notes from './Notes.js';



class App extends Component {
  render() {
    return (
      <div className="App">
        <Notes/>
      </div>
    );
  }
}
// should I render my main default view in here?
// where to really start...
export default App;
