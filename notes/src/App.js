import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Nav from "./components/Nav";
import Display from "./components/Display";

class App extends Component {
  render() {
    return (
      <div className="App">
        App Loaded
        <Nav />
      </div>
    );
  }
}

export default App;
