import React, { Component } from 'react';
import './index.css';
import './App.css';
import ListView from './ListView';
import CreateNote from './CreateNote';
class App extends Component {
  render() {
    return (
      <div className="App">
      
        <ListView />
       <CreateNote />
      </div>
    );
  }
}

export default App;
