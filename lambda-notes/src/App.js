import React, { Component } from "react";
import { connect } from "react-redux";
import { Route, withRouter } from "react-router-dom";

import { fetchNotes } from "./Actions";
import Navigation from "./Components/Navigation/Navigation.js";
import NoteList from "./Components/NoteList/NoteList.js";
import NoteForm from "./Components/NoteForm/NoteForm.js";
import Note from "./Components/Note/Note.js";

import "./App.css";

class App extends Component {
  state = {
    searchText: ""
  }
  componentDidMount() {
    this.props.fetchNotes();
  }

  searchNotes = event => {
    this.setState({
      searchText: event.target.value
    })
  }

  render() {
    let filteredNotes = this.props.notes;

    if (this.state.searchText !== "") {
      filteredNotes = filteredNotes.filter( note => {
        let title = note.title.toLowerCase().includes(this.state.searchText.toLowerCase());
        let content = note.textBody.toLowerCase().includes(this.state.searchText.toLowerCase());
        return title || content;
      })
    }


    return (
      <div className="App">
        <div className="home-container">
          <Navigation />
          <div className="content-container">
            <Route
              exact
              path="/"
              render={props => <NoteList {...props} notes={filteredNotes.length > 0 ? filteredNotes : this.props.notes} searchText={this.state.searchText} searchNotes={this.searchNotes}/>}
            />

            <Route
              exact
              path="/note/:id"
              render={props => <Note {...props} notes={this.props.notes} />}
            />

            <Route path="/add-note" render={props => <NoteForm {...props} />} />

            <Route
              exact
              path="/edit-note/:id"
              render={props => <NoteForm {...props} edit />}
            />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  notes: state.notes
});

export default withRouter(
  connect(
    mapStateToProps,
    { fetchNotes }
  )(App)
);
