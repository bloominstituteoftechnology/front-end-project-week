import React, { Component } from 'react';
import Sidebar from './components/Sidebar';
import './App.css'

class App extends Component {
  constructor() {
    super();
    this.state = {
      notes: []
    }
  }
  render() {
    return (
      <div>
        <p className='pageView'>Placeholder View</p>
        <div className='container'>
          <Sidebar />
          <div className='mainNotes'>
            yo
          </div>
        </div>
      </div>
    );
  }
}

export default App;
