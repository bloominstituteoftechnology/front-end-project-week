import React, { Component } from "react";
import "./App.css";

////////////////
// COMPONENTS //
////////////////
import LeftSideBar from "./components/LeftSideBar/LeftSideBar";
import ContentWindow from "./components/ContentWindow/ContentWindow";

class App extends Component {
  render() {
    return (
      <div className="App container">
        <LeftSideBar />
        <ContentWindow />
      </div>
    );
  }
}

export default App;
