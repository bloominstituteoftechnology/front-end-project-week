import React, { Component } from "react";
import axios from "axios";
import { Route, NavLink } from "react-router-dom";
import "./App.css";

import SideBar from "./components/side-bar";
import NoteList from "./components/note-list";
import NoteForm from "./components/note-form";

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
        <Route path="/" component={SideBar} />
        <Route
          path="/notes"
          render={() => <NoteList notes={this.state.notes} />}
        />
        <Route path="/note-form" component={NoteForm} />
      </div>
    );
  }
}

export default App;
