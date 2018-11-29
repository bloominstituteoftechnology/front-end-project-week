import React, { Component } from "react";
import axios from "axios";
import { Route } from "react-router-dom";
import SideBar from "./components/SideBar";
import NoteForm from "./components/NoteForm";
import Notes from "./components/Notes";
import Note from "./components/Note";
// import "./App.css";
import { AppWrapper } from "./components/Styled";

class App extends Component {
  constructor() {
    super();
    this.state = {
      notes: [],
      newNote: [
        {
          title: "",
          textBody: ""
        }
      ]
    };
  }

  componentDidMount() {
    axios
      .get("https://fe-notes.herokuapp.com/note/get/all")
      .then(res => {
        this.setState({ notes: res.data });
      })
      .catch(err => console.log(err, "failed to get api"));
  }

  addNote = (e, obj) => {
    e.preventDefault();
    axios
      .post("https://fe-notes.herokuapp.com/note/create")
      .then(res => {
        this.setState({ notes: res.data });
      })
      .catch(err => console.log(err, "failed to create"));
  };

  editNote = id => {
    axios
      .put(`https://fe-notes.herokuapp.com/note/edit/${id}`)
      .then(res => {
        this.setState({ notes: res.data });
      })
      .catch(err => console.log(err.res));
  };

  deleteNote = id => {
    axios
      .delete(`https://fe-notes.herokuapp.com/note/delete/${id}`)
      .then(res => {
        console.log("you have successfully ditched this note");
        this.setState({ notes: res.data });
      })
      .catch(err => console.log(err, "note wasnt ditched"));
  };

  render() {
    return (
      <AppWrapper>
        <SideBar />

        <Route
          path="/note-form"
          render={() => (
            <NoteForm
              notes={this.state.notes}
              addNote={this.addNote}
              editNote={this.editNote}
            />
          )}
        />
        <Route
          path="/note/:id"
          render={props => <Note {...props} deleteNote={this.deleteNote} />}
        />
        <Route
          exact
          path="/"
          render={() => (
            <Notes notes={this.state.notes} deleteNote={this.deleteNote} />
          )}
        />
      </AppWrapper>
    );
  }
}

export default App;
