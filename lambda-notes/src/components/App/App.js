import React, { Component } from "react";
import SideBar_ from "../SideBar_/SideBar_";
import Main_ from "../Main_/Main_";

class App extends Component {
  render() {
    return (
      <div className="container custom-container">
        <div className="row">
          <SideBar_ />
          <Main_ />
        </div>
      </div>
    );
  }
}

export default App;
 