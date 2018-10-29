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
      editing: false
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

  handleSubmit = e => {
    e.preventDefault();
    axios
      .post(`${URL}create`, this.state.newNote)
      .then(() => {
        axios
          .get(`${URL}get/all`)
          .then(res => {
            this.setState({ notes: res.data, newNote: blankFormValues });
            this.props.history.push("/notes");
          })
          .catch(err => console.log(err));
      })
      .catch(err => console.log(err));
  };

  render() {
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
              handleSubmit={this.handleSubmit}
            />
          )}
        />
        <Route path="/notes/:id" component={Note} />
      </Container>
    );
  }
}

export default withRouter(App);
