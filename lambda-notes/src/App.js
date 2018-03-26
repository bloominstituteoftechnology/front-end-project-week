import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import SideMenu from "./components/SideMenu.js";
import YourNotes from "./YourNotes/YourNotes.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <SideMenu />
        <YourNotes />
      </div>
    );
  }
}

export default App;
