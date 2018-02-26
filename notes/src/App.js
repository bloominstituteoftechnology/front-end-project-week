import React, { Component } from "react";
import "./App.css";
import NoteGen from "./components/NoteGen";
import dummyData from "./dummyData";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="leftPanel">
          <h1 className="App-title">Lambda Notes</h1>
        </div>
        <div className="rightPanel">
          <h2>Your Notes:</h2>
          <NoteGen dd={dummyData} />
        </div>
      </div>
    );
  }
}

export default App;
