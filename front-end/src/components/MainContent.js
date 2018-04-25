import React, { Component } from "react";
import NoteList from "./sub-component/NoteList";
import CreateNoteItem from "./sub-component/CreateNoteItem";

import { createNote } from "../actions";
import { connect } from "react-redux";
// import EditNote from "./sub-component/EditNote" // Not done yet

import { Route, withRouter } from "react-router-dom";
import IndividualNote from "./sub-component/IndividualNote";

class MainPageContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      content: ""
    };
  }



  render() {
    // console.log("MainContent: this.props.noteArray", this.state);
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
        {/* <Route path="/note/:id" component={IndividualNote} /> */}
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

export default withRouter(connect(mapStateToProps, { createNote })(MainPageContainer));
