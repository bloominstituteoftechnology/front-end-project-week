import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link} from "react-router-dom";
import SideBar from './SideBar';
import NoteView from './NoteView';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="side-bar">
          <SideBar />
        </div>
        <div className="note-view">
          <NoteView />
          
        </div>
      </div>
    );
  }
}

export default App;
