import React, { Component } from "react";
import { Route, NavLink } from "react-router-dom";

import "./App.css";
import NoteList from "./components/NoteList";
import CreateNote from "./components/CreateNote";
import UpdateNote from "./components/UpdateNote";
import BigNote from "./components/BigNote";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="navbar">
          <h1 className="mainHeader">Lambda Notes</h1>
          <NavLink to="/create">
            <div className="nav-btn" color="info">
              + Create New Note
            </div>
          </NavLink>
          <NavLink to="/NoteList">
            <div className="nav-btn" color="info">
              View your Notes
            </div>
          </NavLink>
        </div>
        <div className="main-view">
          <Route path="/create" render={props => <CreateNote {...props} />} />
          <Route
            path="/update/:id"
            render={props => <UpdateNote {...props} />}
          />
          <Route
            path="/Noteview/:id"
            render={props => <BigNote {...props} />}
          />
          <Route path="/NoteList" render={props => <NoteList {...props} />} />
        </div>
      </div>
    );
  }
}

export default App;
