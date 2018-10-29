import React, { Component } from "react";
import { Route } from "react-router-dom";
import { withRouter } from "react-router-dom";
import axios from "axios";

import { Container } from "../styles";

import Navigation from "../components/Navigation";
import NoteContainer from "./NoteContainer";
import FormContainer from "./FormContainer";
import Note from "../components/Note";

import { URL, blankFormValues } from "../constants";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [],
      newNote: {
        title: "",
        textBody: ""
      },
      editing: false,
      noteToUpdate: null
    };
  }

  componentDidMount() {
    axios
      .get(`${URL}get/all`)
      .then(res => this.setState({ notes: res.data }))
      .catch(err => console.log(err));
  }

  handleInputChange = e => {
    e.preventDefault();
    this.setState({
      newNote: {
        ...this.state.newNote,
        [e.target.name]: e.target.value
      }
    });
  };

  handleUpdate = id => {
    const noteToUpdate = this.state.notes.find(note => note._id === id);
    this.setState({
      noteToUpdate,
      newNote: noteToUpdate,
      editing: true
    });
    this.props.history.push("/form");
  };

  handleDelete = id => {
    axios
      .delete(`${URL}delete/${id}`)
      .then(this.redirect)
      .catch(err => console.log(err));
  };

  handleSubmit = e => {
    e.preventDefault();
    axios
      .post(`${URL}create`, this.state.newNote)
      .then(this.redirect)
      .catch(err => console.log(err));
  };

  handleSubmitUpdate = e => {
    e.preventDefault();
    axios
      .put(`${URL}edit/${this.state.noteToUpdate._id}`, this.state.newNote)
      .then(this.redirect)
      .catch(err => console.log(err));
  };

  redirect = () => {
    axios
      .get(`${URL}get/all`)
      .then(res => {
        this.setState({ notes: res.data, newNote: blankFormValues });
        this.props.history.push("/notes");
      })
      .catch(err => console.log(err));
  };

  render() {
    if (this.state.notes.length < 1) {
      return <div>Loading...</div>;
    }

    return (
      <Container>
        <Navigation />
        <Route
          exact
          path="/notes"
          render={props => (
            <NoteContainer {...props} notes={this.state.notes} />
          )}
        />
        <Route
          path="/form"
          render={props => (
            <FormContainer
              {...props}
              editing={this.state.editing}
              newNote={this.state.newNote}
              handleInputChange={this.handleInputChange}
              handleSubmit={
                this.state.editing ? this.handleSubmitUpdate : this.handleSubmit
              }
            />
          )}
        />
        <Route
          path="/notes/:id"
          render={props => (
            <Note
              {...props}
              handleDelete={this.handleDelete}
              handleUpdate={this.handleUpdate}
            />
          )}
        />
      </Container>
    );
  }
}

export default withRouter(App);
