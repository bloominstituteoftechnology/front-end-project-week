import React, { Component } from "react";
import { Route } from "react-router-dom";
import "./App.css";

import NotesList from "./components/NotesList";
import NoteForm from "./components/NoteForm";
import Note from "./components/Note";
import EditNote from "./components/EditNote";
import DeleteNote from "./components/DeleteNote";
import Nav from "./components/Nav";

class App extends Component {
  constructor() {
    super();
    this.state = {
      notes: [
        {
          title: "Note 1",
          id: 0,
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam facilisis posuere pellentesque. Nunc bibendum pharetra sem, et laoreet turpis finibus ut. "
        },
        {
          title: "Note 2",
          id: 1,
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam facilisis posuere pellentesque. Nunc bibendum pharetra sem, et laoreet turpis finibus ut. "
        },
        {
          title: "Note 3",
          id: 2,
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam facilisis posuere pellentesque. Nunc bibendum pharetra sem, et laoreet turpis finibus ut. "
        },
        {
          title: "Note 4",
          id: 3,
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam facilisis posuere pellentesque. Nunc bibendum pharetra sem, et laoreet turpis finibus ut. "
        }
      ],
      title: "",
      content: "",
      deleting: false,
      currentNote: {}
    };
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleAddNote = e => {
    e.preventDefault();
    const notes = this.state.notes.slice();
    notes.push({
      title: this.state.title,
      content: this.state.content,
      id: this.state.notes.length
    });
    alert("Note added!");
    this.setState({ notes, title: "", content: "" });
  };

  handleSetCurrent = id => {
    this.setState({ currentNote: this.state.notes[`${id}`] });
  };

  handleEditTitle = e => {
    this.setState({
      currentNote: {
        id: this.state.currentNote.id,
        title: e.target.value,
        content: this.state.currentNote.content
      }
    });
  };

  handleEditContent = e => {
    this.setState({
      currentNote: {
        id: this.state.currentNote.id,
        title: this.state.currentNote.title,
        content: e.target.value
      }
    });
  };

  handleEditNote = e => {
    e.preventDefault();
    const notes = this.state.notes.slice();
    const id = this.state.currentNote.id;
    notes[id] = {
      id: this.state.currentNote.id,
      title: this.state.currentNote.title,
      content: this.state.currentNote.content
    };
    this.setState({ notes, currentNote: {} });
    alert(`updated`);
  };

  toggleDeleting = () => {
    this.setState({ deleting: !this.state.deleting });
  };

  handleDeleteNote = e => {
    e.preventDefault();
    const notes = this.state.notes.slice();
    const id = this.state.currentNote.id;
    const filtered = notes.filter(note => note.id !== id )
    this.setState({ notes: filtered, currentNote: {} });
  };

  render() {
    return (
      <div className="App">
        <Nav />

        <Route
          exact
          path="/"
          render={props => <NotesList {...props} notes={this.state.notes} />}
        />


        <Route
          path="/notes/:id"
          render={props => (
            <Note
              {...props}
              notes={this.state.notes}
              toggleDeleting={this.toggleDeleting}
            />
          )}
        />


        <Route
          path="/form"
          render={props => (
            <NoteForm
              {...props}
              title={this.state.title}
              content={this.state.content}
              handleAddNote={this.handleAddNote}
              handleInputChange={this.handleInputChange}
            />
          )}
        />



        <Route
          path="/edit/:id"
          render={props => (
            <EditNote
              {...props}
              notes={this.state.notes}
              currentNote={this.state.currentNote}
              handleSetCurrent={this.handleSetCurrent}
              handleEditTitle={this.handleEditTitle}
              handleEditContent={this.handleEditContent}
              handleEditNote={this.handleEditNote}
            />
          )}
        />


        {this.state.deleting ? (
          <Route
            path="/notes/:id"
            render={props => (
              <DeleteNote
                {...props}
                toggleDeleting={this.toggleDeleting}
                handleSetCurrent={this.handleSetCurrent}
                handleDeleteNote={this.handleDeleteNote}
              />
            )}
          />
        ) : null}


      </div>
    );
  }
}

export default App;
