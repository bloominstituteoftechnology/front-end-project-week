import React, { Component } from "react";
import logo from "./logo.svg";
import { Route, Link } from "react-router-dom";
import DisplayNotes from "./components/DisplayNotes";
import "./App.css";
import sampleNotes from "./sample-notes";
import { NewNote } from "./components/NewNote";

class App extends Component {
  state = {
    notes: []
  };

  loadSampleNotes = () => {
    this.setState({ notes: sampleNotes });
  };

  addNote = data => {
    data = { ...data, id: Number(this.state.notes.length + 1) };
    const notes = this.state.notes;
    notes.push(data);
    this.setState({ notes });
  };
  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="row">
            <div className="col-3 left__side">
              <h2 className="sidebar__head">Lambda Notes</h2>
              <a href="/" className="sidebar__button">
                View Your Notes
              </a>
              <a href="/createNewNote" className="sidebar__button">
                Create New Note
              </a>
              <button onClick={this.loadSampleNotes}>Load Sample Notes</button>
            </div>
            <Route
              exact
              path="/"
              render={() => <DisplayNotes notes={this.state.notes} />}
            />
            <Route
              path="/createNewNote"
              render={() => <NewNote addNote={this.addNote} />}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
