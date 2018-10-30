import React, { Component } from "react";
import { Route } from "react-router-dom";
import axios from "axios";
import NotesList from "./components/NotesList";
import Note from "./components/Note.js";
import EditNote from "./components/EditNote";
import AddNote from "./components/AddNote";

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

  updateNotes = updatedNote => {
    const updatedNotes = this.state.notes.map(note => {
      if (note._id === updatedNote._id) {
        return updatedNote;
      }
      return note;
    });
    this.setState({ notes: updatedNotes });
  };

  updateDelete = updatedList => {
    const updatedLists = this.state.notes.map(note => {
      if (note._id === updatedList._id) {
        return updatedList;
      }
      return note;
    });
    this.setState({ notes: updatedLists });
  };

  render() {
    return (
      <div className="App">
        <Route
          exact
          path="/"
          render={props => <NotesList {...props} notes={this.state.notes} />}
        />
        <Route
          path="/note/get/:id"
          render={props => (
            <Note
              {...props}
              notes={this.state.notes}
              updateNotes={this.updateNotes}
              updateDelete={this.updateDelete}
            />
          )}
        />
        <Route
          path="/note/create"
          render={props => (
            <AddNote {...props} updateNotes={this.updateNotes} />
          )}
        />
        <Route
          path="/note/edit/:id"
          render={props => <EditNote {...props} />}
        />
      </div>
    );
  }
}

export default App;
