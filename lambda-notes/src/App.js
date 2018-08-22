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

  render() {
    console.log("this.state.notes", this.state.title);
    console.log("this.state.notes", this.state.description);
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
