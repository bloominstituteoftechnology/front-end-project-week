import React, { Component } from "react";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import SideNav from "./components/SideNav";
import ListView from "./components/ListView";
import CreateView from "./components/CreateView";
import NoteView from "./components/NoteView";
// import EditView from './components/EditView';
import DeleteView from "./components/DeleteView";

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      content: "",
      notes: []
    };
  }

  noteHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitNewNote = e => {
    e.preventDefault();
    const { notes } = this.state;
    const myNotes = {
      title: this.state.title,
      content: this.state.content
    };
    notes.push(myNotes);
    this.setState({ notes, myNotes: "" });
  };

  updateNote = e => {
    e.preventDefault();
    const { notes } = this.state;
    const updatedNote = {
      title: this.state.title.id,
      content: this.state.title.id
    };
    notes.push(updatedNote);
    this.setState({ notes, updatedNote: "" });
  };

  // deleteModal = e => {}

  render() {
    return (
      <div>
        <SideNav />
        <div>
          <CreateView
            title={this.state.title}
            content={this.state.content}
            notes={this.state.notes}
            onChange={this.noteHandler}
            onSubmit={this.submitNewNote}
          />
          <ListView notes={this.state.notes} />
          <NoteView />
          {/* <EditView /> */}
          <DeleteView />
        </div>
      </div>
    );
  }
}

export default App;
