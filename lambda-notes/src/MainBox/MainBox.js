import React from "react";
import axios from "axios";
import { Route } from "react-router-dom";

import NoteForm from "../components/NoteForm";
import NavBar from "../components/NavBar";
import ListView from "../components/ListView";

class MainBox extends React.Component {
  constructor() {
    super();
    this.state = {
      notes: []
    };
  }

  componentDidMount() {
    axios
      .get(`https://fe-notes.herokuapp.com/note/get/all`)
      .then(response => this.setState({ notes: response.data }))
      .catch(error => console.log(error));
  }

  addNote = newNote => {
    axios
      .post(`https://fe-notes.herokuapp.com/note/create`, newNote)
      .then(response => this.setState({ notes: response.data }))
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
      </div>
    );
  }
}

export default MainBox;
