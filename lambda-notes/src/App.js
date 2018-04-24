import React, { Component } from "react";
import logo from "./logo.svg";
import { Route, Link } from "react-router-dom";
import DisplayNotes from "./components/DisplayNotes";
import "./App.css";
import sampleNotes from "./sample-notes";
import { NewNote } from "./components/NewNote";
import { ViewNote } from "./components/ViewNote";

class App extends Component {
  state = {
    notes: []
  };

  componentDidMount() {
    this.loadSampleNotes();
  }

  loadSampleNotes = () => {
    this.setState({ notes: sampleNotes });
  };

  addNote = data => {
    data = { ...data, id: Number(this.state.notes.length + 1) };
    const notes = this.state.notes;
    notes.push(data);
    this.setState({ notes });
  };

  deleteNote = id => {
    const tempNotes = this.state.notes;
    const notes = tempNotes.filter(note => note.id !== id);
    this.setState({ notes });
  };
  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="row">
            <div className="col-3 left__side">
              <h2 className="sidebar__head">Lambda Notes</h2>
              <Link to="/" className="sidebar__button">
                View Your Notes
              </Link>
              <Link to="/createNewNote" className="sidebar__button">
                Create New Note
              </Link>
              <button onClick={this.loadSampleNotes}>Load Sample Notes</button>
            </div>
            <Route
              exact
              path="/"
              render={props => (
                <DisplayNotes {...props} notes={this.state.notes} />
              )}
            />
            <Route
              path="/createNewNote"
              render={props => <NewNote {...props} addNote={this.addNote} />}
            />
            <Route
              path="/viewnote/:id"
              render={props => (
                <ViewNote
                  {...props}
                  notes={this.state.notes}
                  deleteNote={this.deleteNote}
                />
              )}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
