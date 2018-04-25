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
          <div className="MainContentContainer row m-0">
            <div className="col-2 p-0 m-0">
              <SideMenu />
            </div>
            <div className=" col-10 p-0 m-0">
              <MainContent />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
