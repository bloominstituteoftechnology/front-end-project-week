import React, { Component } from 'react';
import './App.css';
import CreateNote from './components/CreateNote';
import EditNote from "./components/EditNote";
import Note from "./components/Note";
import SideBar from "./components/SideBar";

class App extends Component {
  render() {
    return (
      <div className="App">
        <SideBar />
      </div>
    );
  }
}

export default App;
