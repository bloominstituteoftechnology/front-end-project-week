import React, { Component } from 'react';

import './App.css';



import SideView from './components/SideView';
import Notes from './components/NotesPreview';
import CreateNote from './components/CreateNote';


class App extends Component {
  render() {
    return (
      <div className="App">

        <SideView />          
        <Notes />
  <CreateNote />
      </div>
    );
  }
}

export default App;
