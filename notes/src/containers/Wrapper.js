import React, { Component } from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import ReactLoading from "react-loading";

import { Container, SpinnerWrapper } from "../styles";

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
  hideEditForm,
  sortList,
  toggleSort
} from "../actions";

class Wrapper extends Component {
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
    this.props.history.push("/");
  };

  cancelForm = () => {
    if (this.props.editing === true) {
      this.props.hideEditForm();
    }
    this.setState({ newNote: blankFormValues });
    this.props.history.goBack();
  };

  sortAToZ = e => {
    e.preventDefault();
    this.props.sortList((a, b) => {
      if (a.title.toLowerCase() < b.title.toLowerCase()) {
        return -1;
      }
      if (a.title.toLowerCase() > b.title.toLowerCase()) {
        return 1;
      }
      return 0;
    });
  };

  sortZToA = e => {
    e.preventDefault();
    this.props.sortList((a, b) => {
      if (a.title.toLowerCase() < b.title.toLowerCase()) {
        return 1;
      }
      if (a.title.toLowerCase() > b.title.toLowerCase()) {
        return -1;
      }
      return 0;
    });
  };

  render() {
    if (this.props.fetchingNotes === true) {
      return (
        <SpinnerWrapper>
          <ReactLoading
            type={"spinningBubbles"}
            color="#333"
            height={160}
            width={160}
          />
        </SpinnerWrapper>
      );
    }

    return (
      <Container>
        <Navigation
          editing={this.props.editing}
          cancelEdit={() => {
            this.props.hideEditForm();
            this.setState({ newNote: blankFormValues });
          }}
        />
        <Route
          exact
          path="/"
          render={props => (
            <NoteContainer
              {...props}
              notes={this.props.notes.filter(
                note =>
                  note.title.toLowerCase().includes(this.props.criteria) ||
                  note.textBody.toLowerCase().includes(this.props.criteria)
              )}
              toggleSort={this.props.toggleSort}
              sortAToZ={this.sortAToZ}
              sortZToA={this.sortZToA}
              showDropdown={this.props.showSort}
            />
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
  editing: state.editing,
  showSort: state.showSort,
  criteria: state.criteria,
  fetchingNotes: state.fetchingNotes
});

export default withRouter(
  connect(
    mapStateToProps,
    {
      fetchNotes,
      addNote,
      editNote,
      displayEditForm,
      hideEditForm,
      sortList,
      toggleSort
    }
  )(Wrapper)
);
