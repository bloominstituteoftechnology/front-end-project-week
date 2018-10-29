import React, { Component } from "react";
import axios from "axios";
import "./App.css";

import SideBar from "./components/side-bar";
import NoteList from "./components/note-list";

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
      .catch(error => console.log(error));
  }

  render() {
    return (
      <div className="App">
        <SideBar />
        <NoteList notes={this.state.notes} />
      </div>
    );
  }
}

export default App;
