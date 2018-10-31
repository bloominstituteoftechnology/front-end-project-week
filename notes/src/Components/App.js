import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import axios from 'axios';

import ListNotes from "../views/ListNotes";
import AddEditNote from '../views/AddEditNote';
import ReadNote from '../views/ReadNote';

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

  componentDidMount(){
    this.getNotes();
  }

  renderNote = ({ match }) => {
    const selectedNote = this.state.notes.find(note => note._id === match.params.noteId );
    return <ReadNote {...selectedNote} />
  }

  AddEditNote = () => {
    console.log('addEditNoteCalled');
    return <AddEditNote />
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Sidebar />
          <Route exact path="/"
            render={() => <ListNotes notes={this.state.notes} />}
          />
          <Route exact path='/n/:noteId' render={this.renderNote} />
          <Route path='/AddNote' render={this.addEditNote} />
        </div>
      </Router>
    );
  }
}

export default App;