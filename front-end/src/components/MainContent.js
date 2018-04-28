import React, { Component } from "react";
import NoteList from "./sub-component/NoteList";
import CreateNoteItem from "./sub-component/CreateNoteItem";
import EditNote from "./sub-component/EditNote";
import "./MainContent.css";

import { createNote, deleteNote, editNote } from "../actions";
import { connect } from "react-redux";
// import EditNote from "./sub-component/EditNote" // Not done yet

import { Route, withRouter } from "react-router-dom";
import NoteDetail from "./sub-component/NoteDetail";

class MainPageContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      content: ""
    };
  }

  render() {
    // console.log("MainContent: this.props.noteArray", this.props.noteArray);
    return (
      <div className="RouteContainer">
        <Route
          exact
          path="/"
          render={props => <NoteList mainProps={this.props} />}
        />
        <Route
          path="/create"
          render={props => <CreateNoteItem mainProps={this.props} />}
        />
        <Route
          path="/note/:id"
          render={props => <NoteDetail {...props} mainProps={this.props} />}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    noteArray: state
  };
};

export default withRouter(
  connect(mapStateToProps, { createNote, deleteNote, editNote })(MainPageContainer)
);
