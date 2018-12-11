import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import axios from "axios";

import ListNotes from "../views/ListNotes";
import AddEditNote from "../views/AddEditNote";
import ReadNote from "../views/ReadNote";

import Sidebar from "./Sidebar";

import "./App.css";

const url = "http://localhost:9000";

class App extends Component {
  constructor() {
    super();
    this.state = {
      notes: [],
      // title: '',
      // textBody: '',
      // tags: [],
      // activeId: '',
    };
  }

  getNotes() {
    console.log("getNotes called");
    axios
      .get(`${url}/notes`)
      .then(res => {
        console.log(res.data);
        this.setState({ notes: res.data })
      })
      .catch(error => console.log(error));
  }

  getNoteById(id) {
    console.log("getNoteById called");
    axios
      .get(`${url}/notes/${id}`)
      .then(response => {
        console.log(response);
        this.setState({ 
        title: response.title, 
        textBody: response.textBody, 
        activeId: response.id })
      })
      .catch(error => console.log(error));

    
  }

  postNote(newNote) {
    console.log('Posting new note');
    axios
      .post(`${url}/notes`, newNote)
      .then(this.getNotes)
      .catch(error => console.log(error));
  }

  editNote(id, newNoteContent) {
    console.log('Updating note: ' + id + '\nwith: ', newNoteContent);
    axios
      .put(`${url}/notes/${id}`, newNoteContent)
      .then(this.getNotes)
      .catch(error => console.log(error));
  }

  deleteNote(id) {
    console.log('Deleting note: ' + id);
    axios
      .delete(`${url}/notes/${id}`)
      .then(this.getNotes)
      .catch(error => console.log(error));
  }

  componentDidMount() {
    this.getNotes();
  }


  renderNote = ({ match }) => {
    const selectedNote = this.state.notes.find(
      note => note.id === match.params.currentId
    );
    console.log("match params\n" + match.params);
    if(!selectedNote){
      console.log("note not found");
      return null;
    } else {
      return <ReadNote id={selectedNote.id} title={selectedNote.title} textBody={selectedNote.textBody} deleteNote={this.deleteNote} editNote={this.editNote} />;
    }
  };

  addNote = () => {
    return <AddEditNote postNote={this.postNote} />;
  }

  updateNote = ({ match }) => {
    const selectedNote = this.state.notes.find(
      note => note.id === match.params.currentId
    );
    return <AddEditNote {...selectedNote} putNote={this.putNote} />;
  };

  render() {
    return (
      <Router>
        <div className="App">
          <Sidebar />
          <Switch>
            <Route exact path="/" render={() => <ListNotes notes={this.state.notes} />} /> 
            <Route exact path="/n/:noteId" render={this.renderNote} /> 
            <Route path="/add" render={this.addNote} />
            <Route path="/edit" render={this.updateNote} /> 
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
