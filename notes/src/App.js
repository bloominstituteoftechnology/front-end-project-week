import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import List from "./components/List";

class App extends Component {
  constructor() {
    super();
    this.state = {
      notes: []
    };
  }

  componentDidMount() {
    axios
      .get("https://killer-notes.herokuapp.com/note/get/all")
      .then(res => this.setState({ notes: res.data }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="App">
        <List notes={this.state.notes} />
      </div>
    );
  }
}

export default App;
