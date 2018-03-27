import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./App.css";

import ListView from "./components/list-view";
import SideNav from "./components/side-nav";
import NoteView from "./components/note-view";
import NewNote from "./components/create-new-view";
import EditNote from "./components/edit-view";

class App extends Component {
  nextId = 0;
  noteId = 0;
  state = {
    notes: [
      {
        id: 0,
        title: "Note Title",
        body:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum commodi tempora quam quaerat odit nesciunt, esse minus architecto necessitatibus aliquam nisi aut a doloremque voluptates facere voluptatem qui voluptate id.  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum commodi tempora quam quaerat odit nesciunt, esse minus architecto necessitatibus aliquam nisi aut a doloremque voluptates facere voluptatem qui voluptate id."
      },
      {
        id: 1,
        title: "Note Title",
        body:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum commodi tempora quam quaerat odit nesciunt, esse minus architecto necessitatibus aliquam nisi aut a doloremque voluptates facere voluptatem qui voluptate id."
      },
      {
        id: 2,
        title: "Note Title",
        body:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum commodi tempora quam quaerat odit nesciunt, esse minus architecto necessitatibus aliquam nisi aut a doloremque voluptates facere voluptatem qui voluptate id. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum commodi tempora quam quaerat odit nesciunt, esse minus architecto necessitatibus aliquam nisi aut a doloremque voluptates facere voluptatem qui voluptate id."
      },
      {
        id: 3,
        title: "Note Title",
        body:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum commodi tempora quam quaerat odit nesciunt, esse minus architecto necessitatibus aliquam nisi aut a doloremque voluptates facere voluptatem qui voluptate id. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum commodi tempora quam quaerat odit nesciunt, esse minus architecto necessitatibus aliquam nisi aut a doloremque voluptates facere voluptatem qui voluptate id."
      },
      {
        id: 4,
        title: "Note Title",
        body:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum commodi tempora quam quaerat odit nesciunt, esse minus architecto necessitatibus aliquam nisi aut a doloremque voluptates facere voluptatem qui voluptate id. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum commodi tempora quam quaerat odit nesciunt, esse minus architecto necessitatibus aliquam nisi aut a doloremque voluptates facere voluptatem qui voluptate id. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum commodi tempora quam quaerat odit nesciunt, esse minus architecto necessitatibus aliquam nisi aut a doloremque voluptates facere voluptatem qui voluptate id."
      },
      {
        id: 5,
        title: "Note Title",
        body:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum commodi tempora quam quaerat odit nesciunt, esse minus architecto necessitatibus aliquam nisi aut a doloremque voluptates facere voluptatem qui voluptate id. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum commodi tempora quam quaerat odit nesciunt, esse minus architecto necessitatibus aliquam nisi aut a doloremque voluptates facere voluptatem qui voluptate id."
      },
      {
        id: 6,
        title: "Note Title",
        body:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum commodi tempora quam quaerat odit nesciunt, esse minus architecto necessitatibus aliquam nisi aut a doloremque voluptates facere voluptatem qui voluptate id."
      },
      {
        id: 7,
        title: "Note Title",
        body:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum commodi tempora quam quaerat odit nesciunt, esse minus architecto necessitatibus aliquam nisi aut a doloremque voluptates facere voluptatem qui voluptate id."
      },
      {
        id: 8,
        title: "Note Title",
        body:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum commodi tempora quam quaerat odit nesciunt, esse minus architecto necessitatibus aliquam nisi aut a doloremque voluptates facere voluptatem qui voluptate id.  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum commodi tempora quam quaerat odit nesciunt, esse minus architecto necessitatibus aliquam nisi aut a doloremque voluptates facere voluptatem qui voluptate id.  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum commodi tempora quam quaerat odit nesciunt, esse minus architecto necessitatibus aliquam nisi aut a doloremque voluptates facere voluptatem qui voluptate id."
      }
    ]
  };

  handleListView = eachNote => {
    for (let i = 0; i < this.state.notes.length; i++) {
      if (this.state.notes[i].id === eachNote) this.eachNote = i;
    }
  };

  handleDeleteModal = eachNote => {
    const notesUpdate = this.state.notes.filter(note => note.id !== eachNote);
    this.setState({
      notes: notesUpdate
    });
  };

  handleNewNote = input => {
    const newNote = {
      id: this.nextId++,
      title: input.title,
      body: input.body
    };
    const newNotes = [...this.state.notes, newNote];
    this.setState({
      notes: newNotes
    });
  };

  handleEditNote = update => {
    const editedNote = {
      id: update.id,
      title: update.title,
      body: update.body
    };
    const editedNotes = [...this.state.notes];
    editedNotes.splice(this.noteId, 1, editedNote);
    this.setState({
      notes: editedNotes
    });
  };

  sortNotes = sortedNotes => {
    this.setState({
      notes: sortedNotes
    });
  };

  render() {
    return (
      <Router>
        <div className="App">
          <SideNav />
          <Route
            exact
            path={"/"}
            render={() => ( 
              <ListView notes={this.state.notes}
                handleListView={this.handleListView}   sortNotes={this.sortNotes}
              />
            )}
          />
          <Route
            exact
            path={"/view"}
            render={() => (
              <NoteView
                note={this.state.notes[this.noteId]}
                toggleModal={this.toggleModal}
                deleteNote={this.handleDeleteModal}
              />
            )}
          />
          <Route
            exact
            path={"/create"}
            render={() => <NewNote createNewNote={this.handleNewNote} />}
          />
          <Route
            exact
            path={"/edit"}
            render={() => (
              <EditNote
                note={this.state.notes[this.noteId]}
                handleEditNote={this.handleEditNote}
              />
            )}
          />
        </div>
      </Router>
    );
  }
}

export default App;
