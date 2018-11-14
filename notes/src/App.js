import React, { Component } from "react";
import axios from "axios";

import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      notes: []
    };
  }

  componentDidMount() {
    axios
      .get("https://fe-notes.herokuapp.com/note/get/all")
      .then(response => {
        this.setState({ notes: response.data });
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="App">
        {this.state.notes.map(note => {
          return (
            <div>
              <h1>{note.title}</h1>
              <p>{note.textBody}</p>
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;
