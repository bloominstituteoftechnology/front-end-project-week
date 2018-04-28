import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./App.css";

import SideMenu from "./components/SideMenu";
import MainContent from "./components/MainContent";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header sticky-top">
          <Link to="/" style={{ textDecoration: "none" }}>
            <h1 className="ListView">Note.It</h1>
          </Link>
        </header>

        <div className="PageContainer">
          <div className="MainContentContainer">
            <div className="SideMenu">
              <SideMenu />
            </div>
            <div className="MainContent">
              <MainContent />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
