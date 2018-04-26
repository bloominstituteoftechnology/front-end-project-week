import React, { Component } from "react";

import "./App.css";

import SideMenu from "./components/SideMenu";
import MainContent from "./components/MainContent";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>List View</h1>
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
