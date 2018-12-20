import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";
import { getNotes, updateForm, addNote, deleteNote } from "./actions";
import { withRouter } from "react-router";
import { Route } from "react-router-dom";
import ViewNotes from "./views/ViewNotes";
import List from "./views/List";
import NavBar from "./components/NavBar";
import CreateNew from "./views/CreateNew";

class App extends Component {
  componentDidMount() {
    this.props.getNotes();
  }

  render() {
    if (this.props.fetchingNotes) {
      return <h2>Hang Tight: LOADING.</h2>;
    }
    if (this.props.error) {
      return <h1>Houston, we have a problem.</h1>;
    }
    return (
      <div className="App-Container">
        <NavBar />
        <div className="Primary-View">
          <div className="Notes-Container">
            <Route
              exact
              path="/notes"
              render={props => <List {...props} notes={this.props.notes} />}
            />
            <Route
              
              path="/createNote"
              render={props => (
                <CreateNew {...props} notes={this.props.notes} />
              )}
            />
            <Route
              
              path="/notes/:_id"
              render={props => (
                <ViewNotes
                  {...props}
                  notes={this.props.notes}
                  deleteNote={this.props.deleteNote}
                  updateForm={this.props.updateForm}
                  getNotes={this.props.getNotes}
                />
              )}
            />
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  notes: state.notes,
  fetchingNotes: state.fetchingNotes,
  populate: state.populate
});

export default withRouter(
  connect(
    mapStateToProps,
    { getNotes, updateForm, addNote, deleteNote }
  )(App)
);
