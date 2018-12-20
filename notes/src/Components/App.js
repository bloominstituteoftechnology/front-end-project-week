import React, { Component } from "react";
import "./Components.css";
import "../index.css";
import { connect } from "react-redux";
import { Route, Switch, withRouter } from "react-router-dom";
import { getNotes, addNote } from "../Actions";
import Form from "./Form";
import Note from "./Note";
import NoteList from "./NoteList";
import Sidebar from "./SideBar";

class App extends Component {
  state = {
    filteredNotes: [],
    search: "",
    title: "",
    body: ""
  };

  // fetches all of our notes from store and passes them to store
  componentDidMount() {
    this.props.getNotes();
  }

  // adjusts state of title and textBody whenever there is new input
  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  // handle the search change check if any of the data includes the search term
  handleSearchChange = e => {
    this.setState({ search: e.target.value });
    console.log("I am a search bar");
    setTimeout(() => {
      const notes = this.props.notes.filter(note => {
        return (
          note.title.toLowerCase().includes(this.state.search.toLowerCase()) ||
          note.body.toLowerCase().includes(this.state.search.toLowerCase())
        );
      });
      this.setState({ filteredNotes: notes }, () => {
        console.log("help", this.state.filteredNotes);
      });
    }, 1);
  };

  // sends current state of title and textBody to server, resets state, redirects to home page
  handleFormSubmit = e => {
    e.preventDefault();
    this.props.addNote({
      title: this.state.title,
      body: this.state.body
    });
    this.setState({ title: "", body: "" });
    this.props.history.push("/api/all");
  };

  render() {
    return (
      <div className="container">
        <Sidebar
          search={this.state.search}
          handleSearchChange={this.handleSearchChange}
          notes={
            this.state.filteredNotes.length > 0
              ? this.state.filteredNotes
              : this.props.notes
          }
        />

        <Route
          exact
          path="/api/all"
          render={() => (
            <NoteList
              notes={
                this.state.filteredNotes.length > 0
                  ? this.state.filteredNotes
                  : this.props.notes
              }
              fetchingNotes={this.props.fetchingNotes}
            />
          )}
        />

        <Switch>
          <Route
            path="/api/create"
            render={props => (
              <Form
                type={"new"}
                title={this.state.title}
                body={this.state.body}
                handleFormSubmit={this.handleFormSubmit}
                handleInputChange={this.handleInputChange}
              />
            )}
          />
          <Route path="/view/:id" render={props => <Note {...props} />} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    notes: state.notes,
    fetchingNotes: state.fetchingNotes
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    { getNotes, addNote }
  )(App)
);
