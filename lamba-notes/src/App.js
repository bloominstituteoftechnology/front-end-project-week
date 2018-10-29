import React, { Component } from "react";
import axios from "axios";

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: []
    };
  }

  componentDidMount() {
    axios
      .get("https://fe-notes.herokuapp.com/note/get/all")
      .then(response => this.setState({ notes: response.data }))
      .then(console.log(this.state.notes))
      .catch(error => console.log(error));
  }

  render() {
    return (
      <div className="App">
        <h1>testin 1 2</h1>
      </div>
    );
  }
}

export default App;
