import React, { Component } from "react";
import { connect } from "react-redux";
import { Route, Switch, withRouter } from "react-router-dom";
import Form from "../Form";
import Note from "../Note";
import NoteList from "../NoteList";
import Sidebar from "../SideBar";
import { getNotes, addNote } from "../../actions";
import "./index.css";
import "../components.css";
class App extends Component {
  state = {
    filteredNotes: [],
    search: "",
    title: "",
    textBody: ""
  };

  // fetches all notes from server and passes them to store
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
    setTimeout(() => {
      const notes = this.props.notes.filter(note => {
        return (
          note.title.toLowerCase().includes(this.state.search.toLowerCase()) ||
          note.textBody.toLowerCase().includes(this.state.search.toLowerCase())
        );
      });
      this.setState({ filteredNotes: notes });
    }, 1);
  };

  // sends current state of title and textBody to server, resets state, redirects to home page
  handleFormSubmit = e => {
    e.preventDefault();
    this.props.addNote({
      title: this.state.title,
      textBody: this.state.textBody
    });
    this.setState({ title: "", textBody: "" });
    this.props.history.push("/");
  };

  render() {
    return (
      <div className="container">
         <Sidebar search={this.state.search}
                 handleSearchChange={this.handleSearchChange} />

        <Route
          exact
          path="/"
          render={props => (
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
            path="/notes/add"
            render={props => (
              <Form
                type={"new"}
                title={this.state.title}
                textBody={this.state.textBody}
                handleFormSubmit={this.handleFormSubmit}
                handleInputChange={this.handleInputChange}
              />
            )}
          />

          <Route path="/notes/:id" render={props => <Note {...props} />} />
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
