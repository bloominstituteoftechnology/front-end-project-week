import React, { Component } from "react";
import { Route } from "react-router-dom";
// import { Provider, Consumer } from "./Provider";

import "./App.css";

import ListView from "./components/list-view";
import SideNav from "./components/side-nav";
import NoteView from "./components/note-view";
import NewNote from "./components/create-new-view";
import EditNote from "./components/edit-view";

class App extends Component {
  nextId = 9;
  noteId = 0;
  state = {
    notes: [
      {
        id: 0,
        title: "Note Title",
        body:
          "0 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum commodi tempora quam quaerat odit nesciunt, esse minus architecto necessitatibus aliquam nisi aut a doloremque voluptates facere voluptatem qui voluptate id.  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum commodi tempora quam quaerat odit nesciunt, esse minus architecto necessitatibus aliquam nisi aut a doloremque voluptates facere voluptatem qui voluptate id."
      },
      {
        id: 1,
        title: "Note Title",
        body:
          "1 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum commodi tempora quam quaerat odit nesciunt, esse minus architecto necessitatibus aliquam nisi aut a doloremque voluptates facere voluptatem qui voluptate id."
      },
      {
        id: 2,
        title: "Note Title",
        body:
          "2 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum commodi tempora quam quaerat odit nesciunt, esse minus architecto necessitatibus aliquam nisi aut a doloremque voluptates facere voluptatem qui voluptate id. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum commodi tempora quam quaerat odit nesciunt, esse minus architecto necessitatibus aliquam nisi aut a doloremque voluptates facere voluptatem qui voluptate id."
      },
      {
        id: 3,
        title: "Note Title",
        body:
          "3 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum commodi tempora quam quaerat odit nesciunt, esse minus architecto necessitatibus aliquam nisi aut a doloremque voluptates facere voluptatem qui voluptate id. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum commodi tempora quam quaerat odit nesciunt, esse minus architecto necessitatibus aliquam nisi aut a doloremque voluptates facere voluptatem qui voluptate id."
      },
      {
        id: 4,
        title: "Note Title",
        body:
          "4 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum commodi tempora quam quaerat odit nesciunt, esse minus architecto necessitatibus aliquam nisi aut a doloremque voluptates facere voluptatem qui voluptate id. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum commodi tempora quam quaerat odit nesciunt, esse minus architecto necessitatibus aliquam nisi aut a doloremque voluptates facere voluptatem qui voluptate id. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum commodi tempora quam quaerat odit nesciunt, esse minus architecto necessitatibus aliquam nisi aut a doloremque voluptates facere voluptatem qui voluptate id."
      },
      {
        id: 5,
        title: "Note Title",
        body:
          "5 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum commodi tempora quam quaerat odit nesciunt, esse minus architecto necessitatibus aliquam nisi aut a doloremque voluptates facere voluptatem qui voluptate id. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum commodi tempora quam quaerat odit nesciunt, esse minus architecto necessitatibus aliquam nisi aut a doloremque voluptates facere voluptatem qui voluptate id."
      },
      {
        id: 6,
        title: "Note Title",
        body:
          "6 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum commodi tempora quam quaerat odit nesciunt, esse minus architecto necessitatibus aliquam nisi aut a doloremque voluptates facere voluptatem qui voluptate id."
      },
      {
        id: 7,
        title: "Note Title",
        body:
          "7 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum commodi tempora quam quaerat odit nesciunt, esse minus architecto necessitatibus aliquam nisi aut a doloremque voluptates facere voluptatem qui voluptate id."
      },
      {
        id: 8,
        title: "Note Title",
        body:
          "8 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum commodi tempora quam quaerat odit nesciunt, esse minus architecto necessitatibus aliquam nisi aut a doloremque voluptates facere voluptatem qui voluptate id.  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum commodi tempora quam quaerat odit nesciunt, esse minus architecto necessitatibus aliquam nisi aut a doloremque voluptates facere voluptatem qui voluptate id.  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum commodi tempora quam quaerat odit nesciunt, esse minus architecto necessitatibus aliquam nisi aut a doloremque voluptates facere voluptatem qui voluptate id."
      }
    ],
    toggle: false,
    viewer: null
  };

  logIn = name => {
    this.setState({ viewer: name });
  };

  logOut = () => this.setState({ viewer: null });

  handleListView = index => {
    for (let i = 0; i < this.state.notes.length; i++) {
      if (this.state.notes[i].id === index) this.noteId = i;
    }
  };

  handleDeleteModal = id => {
    const notes = this.state.notes.filter(note => note.id !== id);
    this.setState({ notes });
  };

  handleNewNote = input => {
    const newNote = {
      id: this.state.notes.length,
      title: input.title,
      body: input.body
    };
    localStorage.setItem(`id${newNote.id}`, JSON.stringify(newNote));
    const newNotes = [...this.state.notes, newNote];
    this.setState({
      notes: newNotes
    });
  };

   handleEdit = update => {
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

  handleToggle = () => {
    this.setState({ toggle: !this.state.toggle });
  };

  Note = props => {
    const note = this.state.notes.filter(obj => obj.id === +props.match.params.id)[0];
    return (
      <NoteView
        {...props}
        note={note}
        toggle={this.state.toggle}
        handleToggle={this.handleToggle}
        handleDeleteModal={this.handleDeleteModal}
    />
    )
  }

  List = props => {
    return (
      <ListView notes={this.state.notes}
        handleListView={this.handleListView}
        sortNotes={this.sortNotes}
      />
    )
  }

  Create = props => {
    return (
      <NewNote notes={this.state.notes}
         createNewNote={this.handleNewNote} 
      />
    )
  }

  Edit = props => {
    return (
      <EditNote note={this.state.notes[this.noteId]}
        handleEdit={this.handleEdit} />
    )
  }

  componentWillUpdate(nextProps, nextState) {
    localStorage.setItem('notes', JSON.stringify(nextState.notes));
  }

  render() {
    return (
        <div className="App">
          <SideNav notes={this.state.notes} />
          <Route exact path="/" render={this.List} />
          <Route path="/view/:id" render={this.Note}/>
          <Route exact path="/create" render={this.Create}/>
          <Route exact path="/edit" render={this.Edit}/>
        </div>
        )
      }
  }


export default App;
