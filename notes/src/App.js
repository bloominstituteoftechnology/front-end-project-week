import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import List from "./components/List";
import AddNoteForm from "./components/AddNoteForm";
import { Route } from "react-router-dom";

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
      .then(res => this.setState({ notes: res.data }))
      .catch(err => console.log(err));
  }

  addNote = (e, newNote) => {
    e.preventDefault();
    axios
      .post("https://fe-notes.herokuapp.com/note/create", newNote)
      .then(res => {
        newNote._id = res.data.success;
        this.setState({ notes: [...this.state.notes, newNote] });
      })
      .then(res => console.log(res.data))
      .catch(err => console.log(err));
  };

  deleteNote = (e, id) => {
    e.preventDefault();
    axios
      .delete(`https://fe-notes.herokuapp.com/note/delete/${id}`)
      // .then(this.updateDOM())
      .then(res => {})
      .catch(err => console.log(err));
  };

  editNote = (e, id, state) => {
    e.preventDefault();
    axios
      .put(`https://fe-notes.herokuapp.com/note/edit/${id}`, state)
      .then(this.updateDOM())
      .catch(err => console.log(err));
  };

  updateDOM = () => {
    setTimeout(() => {
      console.log("updateDom fired");
      axios
        .get("https://fe-notes.herokuapp.com/note/get/all")
        .then(res => this.setState({ notes: res.data }))
        .catch(err => console.log(err));
    }, 500);
  };

  render() {
    console.log(this.state.notes);
    return (
      <div className="App">
        <nav className="side-bar">
          <h1>Lambda Notes</h1>
        </nav>
        <Route exact path="/" render={props => <AddNoteForm {...props} addNote={this.addNote} />} />
        <List notes={this.state.notes} deleteNote={this.deleteNote} addNote={this.addNote} editNote={this.editNote} />
      </div>
    );
  }
}

export default App;
