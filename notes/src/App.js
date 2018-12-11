import React, { Component } from "react";
import "./App.css";
import SideBar from "./components/SideBar";
import MainContent from "./components/MainContent";

class App extends Component {
  render() {
    return (
      <>
        <div className="page-container">
          <SideBar />
          <MainContent />
        </div>
      </>
    );
  }
}

export default App;
