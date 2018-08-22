import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import AllNotes from "./components/notes/AllNotes";
import NewNote from "./components/notes/NewNote";
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
  render() {
    console.log("thisnotes", this.state.notes);
    console.log("this.state.notes");
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
          <Route path="/notes/:id" component={SingleNote} />
        </div>
      </Router>
    );
  }
}

export default App;
