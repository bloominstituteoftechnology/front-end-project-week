import React, { Component } from 'react';
import './App.css';
import Sidebar from './components/Sidebar';

class App extends Component {
  constructor(props) {
    super(props);
    this.state ={
      notes: []
    }
  }
  
  render() {
    return (
      <div className="App">
        <Sidebar />
      </div>
    );
  }
}

export default App;
