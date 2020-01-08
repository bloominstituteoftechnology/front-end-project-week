import React, { Component } from "react";
import { Route } from "react-router-dom";
// import EditNote from "./Components/EditNote/EditNote";
import NoteDisplay from "./Components/NoteDisplay/NoteDisplay";
import NoteList from "./Components/NoteList/NoteList";
import CreateNote from "./Components/CreateNote/CreateNote";
import axios from "axios";
import "./App.css";
import EditNote from "./Components/EditNote/EditNote";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: []
    };
  }

  getNotes = event => {
    axios
      .get(`https://mitchellnotes-backend.herokuapp.com/api/notes`)
      .then(response => {
        this.setState({
          notes: response.data
        });
      })
      .catch(error => console.log("error!"));
  };

  componentDidMount() {
    this.getNotes();
  }

  getNote = note => {
    axios
      .get(`https://mitchellnotes-backend.herokuapp.com/api/notes/${note}`)
      .then(response => {
        this.getNotes();
      })
      .catch(err => console.log("error!"));
  };

  newNote = note => {
    axios
      .post(`https://mitchellnotes-backend.herokuapp.com/api/notes`, note)
      .then(response => {
        this.getNotes();
        this.setState({ notes: response.data });
      })
      .catch(error => console.log("error!"));
  };

  updateNote = updateNote => {
    axios
      .put(
        `https://mitchellnotes-backend.herokuapp.com/api/notes/${updateNote.id}`,
        updateNote
      )
      .then(response => {
        this.getNotes();
        console.log("response", updateNote);
      })
      .catch(error => console.log("error!"));
  };

  deleteNote = id => {
    axios
      .delete(`https://mitchellnotes-backend.herokuapp.com/api/notes/${id}`)
      .then(response => {
        this.getNotes();
        console.log(id);
      })
      .catch(error => console.log("error!"));
  };
  render() {
    return (
      <div className="App">
        <Route
          exact
          path="/"
          render={props => <NoteList {...props} notes={this.state.notes} />}
        />
        <Route
          exact
          path="/notes/create-note"
          render={props => <CreateNote {...props} newNote={this.newNote} />}
        />
        <Route
          exact
          path="/notes/display/:id"
          render={props => (
            <NoteDisplay
              {...props}
              notes={this.state.notes}
              getNote={this.getNote}
              deleteNote={this.deleteNote}
            />
          )}
        />
        <Route
          exact
          path="/notes/display/:id/edit"
          render={props => <EditNote {...props} editNote={this.updateNote} />}
        />
      </div>
    );
  }
}

export default App;
