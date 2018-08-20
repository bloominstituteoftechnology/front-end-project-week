import React, { Component } from "react";
import "./App.css";
import Nav from "./Nav Links/Nav";
import NotesHolder from "./Home/HomePage/NotesHolder";
import NewNotePage from "./New Note/NewNotePage";
import { Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="nav-bar">
          <Nav />
        </div>
        <div className="pages">
          <Route exact path="/" render={props => <NotesHolder {...props} />} />
          <Route
            path="/create-new"
            render={props => <NewNotePage {...props} />}
          />
        </div>
      </div>
    );
  }
}

export default App;
