import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="row">
            <div className="col-3 left__side">
              <h2 className="sidebar__head">Lambda Notes</h2>
              <a className="sidebar__button">View Your Notes</a>
              <a className="sidebar__button">Create New Note</a>
            </div>
            <div className="col-9 right__side">
              <div className="row notes__head">
                <h4>Your Notes</h4>
              </div>
              <div className="row">
                List of Notes List of Notes List of Notes List of Notes List of
                Notes List of Notes List of Notes List of Notes List of Notes
                List of Notes List of Notes List of Notes List of Notes List of
                Notes
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
