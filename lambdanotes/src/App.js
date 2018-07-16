import React, { Component } from 'react';
import './App.css';
import Sidebar from "./components/sidebar/Sidebar"
import NewNote from "./components/newnote/NewNote";
import NoteContainer from "./components/notes/NoteContainer";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="sidebar-container">
          <Sidebar />
        </div>
        <Route exact path="/" component={NoteContainer} />
        <Route path="/new" component={NewNote} />
      </div>
    );
  }
}

export default App;
