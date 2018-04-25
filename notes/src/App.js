import React, { Component } from "react";
import Notes from "./components/notes";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Notes />
      </div>
    );
  }
}

export default App;
