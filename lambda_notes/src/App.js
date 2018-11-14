import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="sidebar">
        <h1>Lambda</h1>
        <h1>Notes</h1>
        <div className="navigation">
          <button>View Your Notes</button>
          <button>+ Create New Note</button>
        </div>
      </div>
    );
  }
}

export default App;
