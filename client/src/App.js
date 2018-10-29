import React, { Component } from "react";
import axios from "axios";
import { Route } from "react-router-dom";

import "./App.css";
import NotesList from "./components/NotesList";
import NoteForm from "./components/NoteForm";
import Note from "./components/Note";

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
      .then(res => this.setState({ notes: res.data }))
      .catch(err => console.log(err));
  }

  updateState = newState => {
    this.setState({
      notes: newState
    });
  };

  render() {
    return (
      <div className="App">
        <h1>Lambda Notes</h1>
        <Route
          exact
          path="/"
          render={props => <NotesList {...props} notes={this.state.notes} />}
        />
      </div>
    );
  }
}

export default App;
