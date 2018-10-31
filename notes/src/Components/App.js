import React, { Component } from "react";
import { BrowserRouter as Router, Route, withRouter } from "react-router-dom";
import { connect } from "react-redux";

import { getNotes, postNote } from "../actions";

import ListNotes from "../views/ListNotes";
// import AddNote from './Views/AddNote';
// import ReadNote from './Views/ReadNote';
// import UpdateNote from './Views/UpdateNote';

import Sidebar from "./Sidebar";

import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Sidebar />
          <Route
            exact
            path="/"
            render={() => <ListNotes notes={this.state.notes} />}
          />
          {/* <Route path='/AddNote' render={() => <AddNote postNote={this.postNote}} /> */}
        </div>
      </Router>
    );
  }
}

const mapStateToProps = state => {
  console.log("the state", state);
  return {
    notes: state.notes,
    fetchingNotes: state.fetchingNotes
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    { getNotes, postNote }
  )(App)
);
