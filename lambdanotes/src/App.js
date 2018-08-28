import React, { Component } from 'react';
import { Switch, Route, Link } from "react-router-dom";
import Notes from "./components/Notes";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="sidebar">
            <h1>Lambda Notes</h1>
            <Link to="/notes">
              <p>View Notes</p>
            </Link>
            <Link to="/add">
              <p>Create Note</p>
            </Link>
        </div>

      </div>
    );
  }
}

export default App;
