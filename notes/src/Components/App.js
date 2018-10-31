import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import axios from 'axios';

import ListNotes from "../views/ListNotes";
// import AddNote from './Views/AddNote';
// import ReadNote from './Views/ReadNote';
// import UpdateNote from './Views/UpdateNote';

import Sidebar from "./Sidebar";

import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      notes: []
    };
  }

  getNotes() {
    console.log('getNotes called');
    axios
      .get('https://fe-notes.herokuapp.com/note/get/all')
      .then(response => this.setState({ notes: response.data }))
      .catch(error => console.log(error))
  }

  componentDidMount(){
    this.getNotes();
  }

  render() {
    console.log(this.state.notes);
    return (
      <Router>
        <div className="App">
          <Sidebar />
          <Route
            exact
            path="/"
            render={() => <ListNotes notes={this.state.notes} />}
          />
          {/* <Route path='/AddNote' render={() => <AddNote postNote={this.postNote}} /> */}
        </div>
      </Router>
    );
  }
}

export default App;