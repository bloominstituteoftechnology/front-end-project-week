import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import SideBarContainer from "./components/sidebar/SideBarContainer";
import NotesContainer from "./components/notes/NotesContainer";

class App extends Component {
  constructor() {
    super();
    this.state = {
      notes: [],
      title: '',
      txt: ''
    };
  }

  render() {
    return (
      <div className="App">
        <SideBarContainer />
        <NotesContainer />
      </div>
    );
  }
}

export default App;
