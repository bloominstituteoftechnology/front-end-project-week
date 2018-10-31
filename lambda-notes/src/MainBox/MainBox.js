import React from "react";
import axios from "axios";
import { Route } from "react-router-dom";

import NoteForm from "../components/NoteForm";
import NavBar from "../components/NavBar";
import FullNote from "../components/FullNote";
import ListView from "../components/ListView";

class MainBox extends React.Component {
  constructor() {
    super();
    this.state = {
      notes: [],
      title: "",
      content: ""
    };
  }

  componentDidMount() {
    axios
      .get(`https://fe-notes.herokuapp.com/note/get/all`)
      .then(response => this.setState({ notes: response.data }))
      .catch(error => console.log(error));
  }

  componentDidUpdate() {
    axios
      .get(`https://fe-notes.herokuapp.com/note/get/all`)
      .then(response => this.setState({ notes: response.data }))
      .catch(error => console.log(error));
  }

  addNote = newNote => {
    axios
      .post(`https://fe-notes.herokuapp.com/note/create`, newNote)
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
        <Route
          path="/notes/:id"
          render={props => <FullNote {...props} editNote={this.editNote} />}
        />
      </div>
    );
  }
}
export default MainBox;
