import React, { Component } from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { Container } from "../styles";

import Navigation from "../components/Navigation";
import NoteContainer from "./NoteContainer";
import FormContainer from "./FormContainer";
import Note from "../components/Note";

import { blankFormValues } from "../constants";

import {
  fetchNotes,
  addNote,
  editNote,
  displayEditForm,
  hideEditForm
} from "../actions";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newNote: {
        title: "",
        textBody: ""
      }
    };
  }

  componentDidMount() {
    this.props.fetchNotes();
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
    const noteToUpdate = this.props.notes.find(note => note._id === id);
    this.setState({
      newNote: noteToUpdate
    });
    this.props.displayEditForm();
    this.props.history.push("/form");
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.addNote(this.state.newNote);
    this.setState({ newNote: blankFormValues });
    this.redirect();
  };

  handleSubmitUpdate = e => {
    e.preventDefault();
    this.props.editNote(this.state.newNote);
    this.setState({ newNote: blankFormValues });
    this.props.hideEditForm();
    this.redirect();
  };

  redirect = () => {
    this.props.history.push("/notes");
  };

  cancelForm = () => {
    if (this.props.editing === true) {
      this.props.hideEditForm();
    }
    this.setState({ newNote: blankFormValues });
    this.props.history.goBack();
  };
  render() {
    if (this.props.notes.length < 1) {
      return <div>Loading...</div>;
    }

    return (
      <Container>
        <Navigation editing={this.props.editing} cancelEdit={this.cancelForm} />
        <Route
          exact
          path="/notes"
          render={props => (
            <NoteContainer {...props} notes={this.props.notes} />
          )}
        />
        <Route
          path="/form"
          render={props => (
            <FormContainer
              {...props}
              editing={this.props.editing}
              newNote={this.state.newNote}
              handleInputChange={this.handleInputChange}
              handleSubmit={
                this.props.editing ? this.handleSubmitUpdate : this.handleSubmit
              }
              handleCancel={this.cancelForm}
            />
          )}
        />
        <Route
          path="/notes/:id"
          render={props => <Note {...props} handleUpdate={this.handleUpdate} />}
        />
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  notes: state.notes,
  editing: state.editing
});

export default withRouter(
  connect(
    mapStateToProps,
    {
      fetchNotes,
      addNote,
      editNote,
      displayEditForm,
      hideEditForm
    }
  )(App)
);
