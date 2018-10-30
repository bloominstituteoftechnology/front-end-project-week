import React, { Component } from 'react';
import { Route } from "react-router-dom";

import './App.css';

import Sidebar from "./components/Sidebar";
import NoteList from "./components/NoteList";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Sidebar />
        <Route exact path="/" component={NoteList} />
      </div>
    );
  }
}

export default App;
