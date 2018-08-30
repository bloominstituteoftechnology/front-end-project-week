import React, { Component } from 'react';
import Sidebar from './components/Sidebar';
import MainNotes from './components/MainNotes'
import './App.css'
import DeleteNote from './components/DeleteNote';

class App extends Component {
  render() {
    return (
      <div>
        <p className='pageView'>Placeholder View</p>
        <div className='container'>
          <Sidebar />
          <MainNotes />
        </div>
      </div>
    );
  }
}

export default App;
