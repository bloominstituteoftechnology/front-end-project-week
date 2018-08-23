import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import AllNotes from "./components/notes/AllNotes";
import NewNote from "./components/notes/NewNote";
import EditNote from "./components/notes/EditNote";
import SingleNote from "./components/notes/SingleNote";
import { noteData } from "./components/data/noteData";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      notes: [],
      loadedData: false,
      title: "",
      description: ""
    };
  }
  componentDidMount() {
    this.setState({ notes: noteData, loadedData: true });
  }

  // new note and modify note handlers
  inputChangeHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  submitNewNoteHandler = event => {
    event.preventDefault();
    let notesCopy = this.state.notes.slice();
    let lastIndex = this.state.notes.slice(-1)[0];
    lastIndex = lastIndex.id + 1;
    let newNote = {
      id: lastIndex,
      title: this.state.title,
      description: this.state.description
    };
    notesCopy.push(newNote);
    this.setState({ notes: notesCopy, title: "", description: "" });
  };
  // end new note and modify note handlers

  render() {
    if (this.state.loadedData === false) {
      return (
        <div>
          <p>Loading please wait</p>
        </div>
      );
    }
    return (
      <Router>
        <div className="App">
          <Route
            exact
            path="/"
            render={props => <AllNotes {...props} notes={this.state.notes} />}
          />
          <Route
            path="/new-note"
            render={props => (
              <NewNote
                {...props}
                inputChangeHandler={this.inputChangeHandler}
                submitNewNoteHandler={this.submitNewNoteHandler}
              />
            )}
          />
          <Route
            path="/notes/:id"
            render={props => <SingleNote {...props} notes={this.state.notes} />}
          />
          <Route
            path="/edit-note/:id"
            render={props => <EditNote {...props} notes={this.state.notes} />}
          />
        </div>
      </Router>
    );
  }
}

export default App;
