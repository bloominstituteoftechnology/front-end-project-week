import React, { Component } from 'react';
import './App.css';
import {notes} from '../notes/notes.js';

class App extends Component {
state={
  notes:[]
}
componentDidMount(){
  this.setState(notes:notes)
  console.log(this.state)
}
  render() {
    return (
      <div className="App">
     test
      </div>
    );
  }
}

export default App;
