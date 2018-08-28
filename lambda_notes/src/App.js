import React, { Component } from 'react';
import Sidebar from './components/Sidebar';
import MainNotes from './components/MainNotes'
import CreateNote from './components/CreateNote';
import NoteView from './components/NoteView';
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
          {/* <MainNotes /> */}
          {/* <CreateNote /> */}
          <NoteView />
        </div>
      </div>
    );
  }
}

export default App;
