import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import Notes from "./components/Notes";
import Note from "./components/Note";
import dummyData from "./components/dummydata";
import AddNote from "./components/Addnote";
import EditNote from "./components/Editnote";
import axios from "axios";

const CreateURL = "http://localhost:9000/api/create";
const EditURL = "http://localhost:9000/api/edit/:id";
const DeleteURL = "http://localhost:9000/api/delete/:id";

class App extends Component {
  constructor() {
    super();
    this.state = {
      notes: dummyData,
      newtitle: "",
      newtext: "",
      id: null
    };
  }

  handleNoteSubmit = note => {
    console.log("clicked");
    const newNote = {
      title: note.newtitle,
      body: note.newtext
    };
    axios
      .post(`${CreateURL}`, newNote)
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleEditNote = editNote => {
    this.setState(prevState => ({
      notes: prevState.notes.map(note => {
        if (note.id == editNote.id) {
          return editNote;
        } else {
          return note;
        }
      })
    }));
  };

  handleDeleteNote = id => {
    console.log("clicked", id);
    axios
      .delete(`${DeleteURL}`)
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
      .catch(err => console.log(err));
  };

  render() {
    console.log(this);
    return (
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" render={() => <div>HOME page here</div>} />

          <Route
            exact
            path="/add"
            render={props => (
              <AddNote {...props} onSubmit={this.handleNoteSubmit} />
            )}
          />

          <Route
            exact
            path="/notes"
            render={props => (
              <Notes
                {...props}
                notes={this.state.notes}
                onClick={this.handleDeleteNote}
              />
            )}
          />

          <Route
            exact
            path="/notes/:id"
            render={props => (
              <Note
                {...props}
                notes={this.state.notes}
                submitDelete={this.handleDeleteNote}
                submitEdit={this.handleEditNote}
              />
            )}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
