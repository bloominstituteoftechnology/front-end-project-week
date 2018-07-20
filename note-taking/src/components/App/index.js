import React, { Component } from "react";
import "./App.css";
import CreateNotes from "../CreateNotes";
import Navigation from "../Navigation";
import MainContent from "../MainContent";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <MainContent />
      </div>
    );
  }
}

export default App;
