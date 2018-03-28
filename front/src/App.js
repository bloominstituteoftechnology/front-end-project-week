import React, { Component } from 'react';
import './index.css';
import './App.css';
import ListView from './ListView';
import CreateNote from './CreateNote';
import EditNote from './EditNote';
class App extends Component {
  render() {
    return (
      <div className="App">
      
        <ListView />
       <CreateNote />
       <EditNote />
      </div>
    );
  }
}

export default App;
