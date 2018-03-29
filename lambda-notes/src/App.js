import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider, Consumer } from "./Provider";

import "./App.css";

import ListView from "./components/list-view";
import SideNav from "./components/side-nav";
import NoteView from "./components/note-view";
import NewNote from "./components/create-new-view";
import EditNote from "./components/edit-view";

class App extends Component {
  

  handleListView = eachNote => {
    for (let i = 0; i < this.state.notes.length; i++) {
      if (this.state.notes[i].id === eachNote) this.noteId = i;
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

  render() {
    return (
      <Router>
        <div className="App">
          <SideNav />
          <Route exact path="/" render={this.List} />
          <Route path="/view/:id" render={this.Note}/>
          <Route exact path="/create" render={this.Create}/>
          <Route exact path={"/edit"} render={this.Edit}/>
        </div>
      </Router>
        )
      }
  }


export default App;
