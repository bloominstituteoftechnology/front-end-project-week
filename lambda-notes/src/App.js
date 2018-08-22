import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import AllNotes from "./components/notes/AllNotes";
import NewNote from "./components/notes/NewNote";
import { noteData } from "./components/data/noteData";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      notes: [],
      loadedData: false
    };
  }
  componentDidMount() {
    this.setState({ notes: noteData, loadedData: true });
  }

  render() {
    console.log("this.state.notes", this.state.notes);
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
          <Route path="/new-note" component={NewNote} />
          {/* <Route path="/notes/:id" component={SingleNote} /> */}
        </div>
      </Router>
    );
  }
}

export default App;
