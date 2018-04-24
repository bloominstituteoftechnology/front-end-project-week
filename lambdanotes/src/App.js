import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import NotesList from "./components/NotesList";
import Sidebar from "./components/Sidebar/Sidebar";

export default class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <Sidebar />
        <Switch>
          <Route exact path="/" component={NotesList} />
          {/* <Route path ='/:id' component={Note} /> */}
          {/* <Route path ='/create' component={CreateNote} /> */}
          <Route
            component={() => <h1>There are no notes here, turn back!</h1>}
          />
        </Switch>
      </div>
    );
  }
}

// export default App;
