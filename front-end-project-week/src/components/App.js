import React, { Component } from "react";
import logo from "../logo.svg";
import "../styles/App.css";
// import ReactDom from "react-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="">
          To get started, edit <code>Lambda Notes</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
