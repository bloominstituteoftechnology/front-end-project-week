import React, { Component } from "react";
import axios from "axios";
import { Route } from "react-router-dom";

import Note from "./components/Note";
import Notes from "./components/Notes";
import NoteForm from "./components/NoteForm";
import "./styles.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: []
    };
  }

  componentDidMount() {
    axios
      .get("https://fe-notes.herokuapp.com/note/get/all")
      .then(response => this.setState({ notes: response.data }))
      .catch(error => console.log(error));
  }

  deleteNote = (event, id) => {
    event.preventDefault();
    axios
      .delete(`https://fe-notes.herokuapp.com/note/delete/${id}`)
      .then(response => {
        console.log(response);
        const updatedNotes = this.state.notes.filter(note => note._id !== id);
        this.setState({ notes: updatedNotes });
        console.log(this.state.notes.length);
      });
  };

  render() {
    return (
      <div className="App">
        <div className="sideBar">
          <h1 className="sideBar__headline">
            Lambda
            <br />
            Notes
          </h1>
          <button className="btn">View Your Notes</button>
          <br />
          <button className="btn">Create New Note</button>
        </div>

        <div className="content">
          <Route
            exact
            path="/"
            render={() => <Notes notes={this.state.notes} />}
          />

          <Route path="/submit" component={NoteForm} />

          <Route
            exact
            path="/note/get/:id"
            render={props => <Note {...props} deleteNote={this.deleteNote} />}
          />
        </div>
      </div>
    );
  }
}

export default App;
