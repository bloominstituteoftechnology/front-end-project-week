import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import Form from "./components/Form/form";

class App extends Component {
  constructor() {
    super();
    this.state = {
      notes: [],
      note: {}
    };
  }

  //with new input state of title and textbody are changed.
  handleInputChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Form />
      </div>
    );
  }
}

export default App;
