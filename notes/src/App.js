import React, { Component } from "react";
import Notes from "./components/Notes";
import Buttons from "./components/Buttons";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Buttons />
        <Notes />
      </div>
    );
  }
}

export default App;
