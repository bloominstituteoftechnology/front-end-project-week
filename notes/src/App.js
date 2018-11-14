import React, { Component } from "react";
import axios from "axios";
import NoteList from "./Components/NoteList";
import Nav from "./Components/Nav";
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
        <Nav />
        <NoteList notes={this.state.notes} />
      </div>
    );
  }
}

export default App;
