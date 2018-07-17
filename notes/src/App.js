import React, { Component } from "react";
import Notes from "./components/Notes";
import Buttons from "./components/Buttons";
import { Route } from "react-router-dom";
import Create from "./components/Create";
import "./App.css";
import ViewNote from "./components/ViewNote";
import EditNote from "./components/EditNote";

class App extends Component {
  render() {
    return (
      <div className="container">
        <React.Fragment>
          <Buttons />
        </React.Fragment>
        <React.Fragment>
          <Route exact path="/" component={Notes} />
        </React.Fragment>
        <Route path="/create" component={Create} />
        <Route
          exact
          path="/note/:id"
          component={ViewNote}
        />
        <Route path="/edit" component={EditNote} />
      </div>
    );
  }
}

export default App;
