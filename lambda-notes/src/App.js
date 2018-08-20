import React, { Component } from "react";
import { Route } from "react-router-dom";
import "./App.css";
import axios from 'axios';

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
      notes: [],
      title: "",
      content: "",
      deleting: false,
      currentNote: {}
    };
  }

  componentDidMount() {
    axios
    .get('http://localhost:8000/api/notes')
    .then((response) => {
      this.setState({notes: response.data})
    })
    .catch(err => console.log(err));
  }


//METHODS
  
  handleSetCurrent = note => {
    this.setState({ currentNote: note });
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
    axios 
    .delete(`http://localhost:8000/api/notes/${id}`)
    .then(response => {
      this.setState({notes: response.data})
    })
    .catch(err => {console.log(err)})
  };


  //Sort
  // handleSortAZ = () => {
  //   let notes = this.state.notes.slice();
  //   notes.sort(this.compareTitles);
  //   this.setState({ notes });
  // };

  // handleSortZA = () => {
  //   let notes = this.state.notes.slice();
  //   notes.sort(this.compareTitles).reverse();
  //   this.setState({ notes });
  // }

  // compareTitles = (a, b) => {
  //   if (a.title.toUpperCase() < b.title.toUpperCase()) {
  //     return -1;
  //   } else if (a.title.toUpperCase() > b.title.toUpperCase()) {
  //     return 1;
  //   } else {
  //     return 0;
  //   }
  // };


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
              // handleSortAZ={this.handleSortAZ}
              // handleSortZA={this.handleSortZA}
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
