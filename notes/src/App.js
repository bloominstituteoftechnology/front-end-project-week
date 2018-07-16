import React, { Component } from "react";
import Notes from "./components/Notes";
import Buttons from "./components/Buttons";
import { Route } from "react-router-dom";
import Create from "./components/Create";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Buttons />
        <Route exact path="/" component={Notes} />
        <Route exact path="/create" component={Create} />
      </div>
    );
  }
}

export default App;
