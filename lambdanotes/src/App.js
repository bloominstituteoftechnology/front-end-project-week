import React, { Component } from 'react';
import './App.css';
import Sidebar from "./components/sidebar/Sidebar"
import NewNote from "./components/newnote/NewNote";
import NoteContainer from "./components/notes/NoteContainer";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
class App extends Component {
  constructor(){
    super();
    this.state = [
      {
        id: 0,
        title: "Welcome to Lambda Notes!",
        body: "Click Create New Note to start!"
      },
      {
        id: 1,
        title: "Test Note",
        body: "This is a test"
      }
    ]
  }

  render() {
    return (
      <div className="App">
        <div className="sidebar-container">
          <Sidebar />
        </div>

        <Route
          exact path='/'
          render={(props) => <NoteContainer {...props} notes={this.state} />}
        />
        <Route path="/new" component={NewNote} />
      </div>
    );
  }
}

export default App;
