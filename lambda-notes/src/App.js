import React, { Component } from "react";
import { Route } from "react-router-dom";
import axios from "axios";
import NotesList from "./components/NotesList";
import Note from "./components/Note.js";
import EditNote from "./components/EditNote";
import AddNote from "./components/AddNote";
import { Container } from './Styles';
import "./App.css";

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
    console.log(updatedNote)
    const updatedNotes = this.state.notes.map(note => {
      if (note._id === updatedNote._id) {
        return updatedNote;
      }
      return note;
    });
    this.setState({ notes: updatedNotes });
  };

  updateDeleted = targetID => {
    console.log(targetID)
    const updatedLists = this.state.notes.filter(note => {
      if (note._id === targetID) {
        return false;
      }
      return true;
    });
    this.setState({ notes: updatedLists });
  };

  addNewNotes = addedNote => {
    console.log(addedNote)
    let newNotesList = [...this.state.notes, addedNote]
    this.setState({ notes: newNotesList });
  };

  render() {
    return (
      <Container>
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
              updateDeleted={this.updateDeleted}
            />
          )}
        />
        <Route
          path="/note/create"
          render={props => (
            <AddNote
              {...props}
              updateNotes={this.updateNotes}
              notes={this.state.notes}
              addNewNotes={this.addNewNotes}
            />
          )}
        />
        <Route
          path="/note/edit/:id"
          render={props => <EditNote {...props} />}
        />
      </Container>
    );
  }
}

export default App;
