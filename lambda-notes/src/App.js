import React, { Component } from "react";
import { Route } from "react-router-dom";
import axios from 'axios';
import "./App.css";

import NotesList from "./components/NotesList";
import Note from './components/Note.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        notes: [],
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
        <Route exact path="/" render={props => <NotesList {...props} /> }/>
        <Route path="/note/get/:id" render={props => <Note {...props} /> }/>
      </div>
    );
  }
}

export default App;
