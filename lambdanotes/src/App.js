import React, { Component } from 'react';
import './App.css';
import Sidebar from "./components/sidebar/Sidebar"
import NewNote from "./components/newnote/NewNote";
import NoteContainer from "./components/notes/NoteContainer";
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
  }
  addNote () {

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
        <Route path="/new" component={NewNote} />
      </div>
    );
  }
}

export default App;
