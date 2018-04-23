import React, { Component } from "react";
import logo from "./logo.svg";
import { Route } from "react-router-dom";
import DisplayNotes from "./components/DisplayNotes";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="row">
            <div className="col-3 left__side">
              <h2 className="sidebar__head">Lambda Notes</h2>
              <a href="/" className="sidebar__button">
                View Your Notes
              </a>
              <a className="sidebar__button">Create New Note</a>
            </div>
            <Route exact path="/" component={DisplayNotes} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
