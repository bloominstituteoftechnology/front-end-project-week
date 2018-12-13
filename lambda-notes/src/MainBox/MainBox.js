import React from "react";
import axios from "axios";
import { Route } from "react-router-dom";

import NoteForm from "../components/NoteForm";
import NavBar from "../components/NavBar";
import FullNote from "../components/FullNote";
import ListView from "../components/ListView";
import EditNote from "../components/EditNote";

class MainBox extends React.Component {
  constructor() {
    super();
    this.state = {
      notes: [],
      title: "",
      message: ""
    };
  }

  getNotes = e => {
    axios
      .get(`https://davids-notes.herokuapp.com/notes/get/all`)
      .then(response => this.setState({ notes: response.data }))
      .catch(error => console.log(error));
  };

  componentDidUpdate() {
    this.getNotes();
  }

  componentDidMount() {
    this.getNotes();
  }

  addNote = newNote => {
    axios
      .post(`https://davids-notes.herokuapp.com/notes`, newNote)
      .then(response => this.setState({ note: response.data }))
      .catch(error => console.log(error));
  };

  render() {
    return (
      <div className="main-box">
        <NavBar />
        <Route
          path="/note-form"
          render={props => <NoteForm {...props} addNote={this.addNote} />}
        />
        <Route
          exact
          path="/"
          render={props => <ListView {...props} notes={this.state.notes} />}
        />
        <Route path="/notes/:id" render={props => <FullNote {...props} />} />
        <Route
          path="/edit/:id"
          render={props => <EditNote {...props} notes={this.state.notes} />}
        />
      </div>
    );
  }
}
export default MainBox;
