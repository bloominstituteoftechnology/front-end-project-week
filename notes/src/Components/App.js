import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import axios from 'axios';

import ListNotes from "../views/ListNotes";
// import AddNote from '../views/AddNote';
import ReadNote from '../views/ReadNote';
// import UpdateNote from './views/UpdateNote';

import Sidebar from "./Sidebar";

import "./App.css";

const url = 'https://fe-notes.herokuapp.com/note';


class App extends Component {
  constructor() {
    super();
    this.state = {
      notes: [],
      activeNote: {
        title: '',
        textBody: '',
        tags: [],
      }
    };
  }

  getNotes() {
    console.log('getNotes called');
    axios
      .get(`${url}/get/all`)
      .then(response => this.setState({ notes: response.data }))
      .catch(error => console.log(error))
  }

  getNoteById(noteId) {
    console.log('getNoteById called');
    axios
      .get(`${url}/get/${noteId}`)
      .then(response => console.log(response.data))
      .catch(error => console.log(error))
  }

  componentDidMount(){
    this.getNotes();
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Sidebar />
          <Route
            exact
            path="/"
            render={() => <ListNotes notes={this.state.notes} />}
          />
          <Route path='/:noteId' render={({ match }) => (
            <ReadNote note={this.state.notes.find(note => note._id === match.params.noteId )} />
          )} />
          {/* <Route path='/AddNote' render={() => <AddNote postNote={this.postNote}} /> */}
        </div>
      </Router>
    );
  }
}

export default App;