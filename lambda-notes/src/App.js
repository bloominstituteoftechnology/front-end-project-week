import React, { Component } from 'react';
import { Route } from "react-router-dom";
import axios from "axios";

import './App.css';

import Sidebar from "./components/Sidebar";
import NoteList from "./components/NoteList";

class App extends Component {
  constructor() {
    super();
    this.state = {
      notes: [],
      titleInputText: "",
      textInputText: ""
    }
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
        <Sidebar />
        <Route exact path="/" render={(props) => <NoteList {...props} noteList={this.state.notes} />} />
      </div>
    );
  }
}

export default App;
