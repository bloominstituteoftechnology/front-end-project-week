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
          title: "Note Title",
          id: 0,
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam facilisis posuere pellentesque. Nunc bibendum pharetra sem, et laoreet turpis finibus ut. "
        },
        {
          title: "Clean the kitchen",
          id: 1,
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam facilisis posuere pellentesque. Nunc bibendum pharetra sem, et laoreet turpis finibus ut. "
        },
        {
          title: "Take out the trash",
          id: 2,
          content:
            "Lorem psum dolor sit amet, consectetur adipiscing elit. Aliquam facilisis posuere pellentesque. Nunc bibendum pharetra sem, et laoreet turpis finibus ut. "
        },
        {
          title: "Walk the dog",
          id: 3,
          content:
            "Lorem psum dolor sit amet, consectetur adipiscing elit. Aliquam facilisis posuere pellentesque. Nunc bibendum pharetra sem, et laoreet turpis finibus ut. "
        },
        {
          title: "Code code code",
          id: 4,
          content:
            "Lorem psum dolor sit amet, consectetur adipiscing elit. Aliquam facilisis posuere pellentesque. Nunc bibendum pharetra sem, et laoreet turpis finibus ut. "
        },
        {
          title: "Do something else",
          id: 5,
          content:
            "Lorem psum dolor sit amet, consectetur adipiscing elit. Aliquam facilisis posuere pellentesque. Nunc bibendum pharetra sem, et laoreet turpis finibus ut. "
        },
        {
          title: "Play games",
          id: 6,
          content:
            "Lorem psum dolor sit amet, consectetur adipiscing elit. Aliquam facilisis posuere pellentesque. Nunc bibendum pharetra sem, et laoreet turpis finibus ut. "
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

  handleSetCurrent = note => {
    this.setState({ currentNote: note });
  };

  //Add
  handleAddNote = e => {
    const notes = this.state.notes.slice();
    notes.push({
      title: this.state.title,
      content: this.state.content,
      id: Number(this.state.notes.length)
    });
    this.setState({ notes, title: "", content: "" });
  };

  //Edit
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

  handleEditNote = id => {
    const notes = this.state.notes.slice();
    for (let i = 0; i < notes.length; i++) {
      if (notes[i].id === Number(id)) {
        notes[i] = {
          id: this.state.currentNote.id,
          title: this.state.currentNote.title,
          content: this.state.currentNote.content
        };
      }
    }
    this.setState({ notes, currentNote: {} });
  };

  //Delete
  toggleDeleting = () => {
    this.setState({ deleting: !this.state.deleting });
  };

  handleDeleteNote = id => {
    let notes = this.state.notes.slice();
    notes = notes.filter(note => note.id !== Number(id));
    this.setState({ notes, currentNote: {}, deleting: !this.state.deleting });
  };

  handleSort = () => {
    let notes = this.state.notes.slice();
    notes.sort(this.compareTitles);
    this.setState({ notes });
  };

  compareTitles = (a, b) => {
    if (a.title < b.title) {
      return -1;
    } else if (a.title > b.title) {
      return 1;
    } else {
      return 0;
    }
  };

  render() {
    return (
      <div className="App">
        <Nav />

        <Route
          exact
          path="/"
          render={props => (
            <NotesList
              {...props}
              notes={this.state.notes}
              handleSort={this.handleSort}
            />
          )}
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
