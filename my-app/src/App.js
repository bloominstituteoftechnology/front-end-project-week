import React, { Component } from "react";
import "./App.css";
import SideMenu from "./components/SideMenu/SideMenu";
import YourNotes from "./components/YourNotes/YourNotes";

class App extends Component {
  constructor() {
    super();
    this.state = {
      notes: [],
    };
  }

  render() {
    return (
      <div className="App">
        <SideMenu />
        <YourNotes notes={this.state.notes} />
      </div>
    );
  }
}

export default App;
