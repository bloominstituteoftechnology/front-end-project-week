import React, { Component } from "react";
import NoteList from "./sub-component/NoteList";
import CreateNoteItem from "./sub-component/CreateNoteItem";

import { createNote } from "../actions";
import { connect } from "react-redux";
// import EditNote from "./sub-component/EditNote" // Not done yet

import { Route } from "react-router-dom";

class MainPageContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      content: ""
    };
  }

  render() {
    console.log("MainContent: this.props.noteArray", this.props);
    return (
      <div className="RouteContainer">
        <Route
          exact
          path="/"
          render={props => <NoteList noteArray={this.props.noteArray} />}
        />
        <Route
          path="/note/create"
          render={props => (
            <CreateNoteItem
              mainProps={this.props}
              noteArray={this.props.noteArray}
            />
          )}
        />
        {/* <Route component={EditNote} /> */}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    noteArray: state

  };
};

export default connect(mapStateToProps, { createNote })(MainPageContainer);
