import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import DisplayNotes from "./components/DisplayNotes";
import "./App.css";
import sampleNotes from "./sample-notes";
import { NewNote } from "./components/NewNote";
import { ViewNote } from "./components/ViewNote";
import { EditNote } from "./components/EditNote";

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

  updateNote = note => {
    const notes = this.state.notes;
    notes.map(item => {
      if (item.id === parseInt(note.id, 10)) {
        if (item.title) item.title = note.title;
        if (item.text) item.text = note.text;
      }
    });
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
            </div>
            <Switch>
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
              <Route
                path="/editNote/:id"
                render={props => (
                  <EditNote
                    {...props}
                    notes={this.state.notes}
                    updateNote={this.updateNote}
                  />
                )}
              />
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
