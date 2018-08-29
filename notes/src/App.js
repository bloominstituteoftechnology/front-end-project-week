import React, { Component } from "react";

import SideNav from "./components/SideNav";
import ListView from "./components/ListView";
import CreateView from "./components/CreateView";
// import EditView from './components/EditView';
// import NoteView from './components/NoteView';

import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      notes: [],
    };
  }

  render() {
    return (
      <React.Fragment className="App">
        <SideNav />
        <ListView {...this.state} />
        <CreateView />
      </React.Fragment>
    );
  }
}

export default App;
