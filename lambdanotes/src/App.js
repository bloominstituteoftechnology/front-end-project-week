import React, { Component } from 'react';
import './App.css';
import Sidebar from "./components/Sidebar/Sidebar"
import NewNote from "./components/newnote/NewNote";
import NoteContainer from "./components/notes/NoteContainer";
import ViewNote from "./components/viewnote/ViewNote";
import { Route } from "react-router-dom";
class App extends Component {
  constructor(){
    super();
    this.state = {
      notes: [{
        id: 0,
        title: "Welcome to Lambda Notes!",
        body: "Click Create New Note to start!"
      },
      {
        id: 1,
        title: "Test Note",
        body: "This is a test"
      }]
    }
    this.addNote = this.addNote.bind(this);
  }
  addNote(note) {
    this.state.notes.push(note);
  }

  render() {
    return (
      <div className="App">
        <div className="sidebar-container">
          <Sidebar />
        </div>

        <Route
          exact path='/'
          render={(props) => <NoteContainer {...props} notes={this.state.notes} />}
        />
        <Route
          path='/new'
          render={(props) => <NewNote {...props} addNote={this.addNote} />}
        />
        <Route
          path='/notes/:id'
          render={(props) => <ViewNote {...props} />}
             />
      </div>
    );
  }
}

export default App;
