// React Imports Here
import React, { Component } from "react";
// Components Imports Here
import Template from "./components/Template";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

class App extends Component {
  render() {
    return (
      <div style={styles}>
        <h2>Basic Redux App Boilerplate</h2>
        <Template />
      </div>
    );
  }
}

export default App;
