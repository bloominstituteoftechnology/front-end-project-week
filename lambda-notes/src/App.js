import React, { Component } from "react";
import { Route } from "react-router-dom";
import { MainNav } from "./components/mainNav/MainNav";

import "./css_styles/App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Route path={"/"} component={MainNav} />
      </div>
    );
  }
}

export default App;
