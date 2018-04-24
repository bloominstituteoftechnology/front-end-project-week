import React, { Component } from "react";
import NoteList from "./sub-component/NoteList";
import CreateNoteItem from "./sub-component/CreateNoteItem";

import { fetchNotes } from "../actions";
import { connect } from "react-redux";
// import EditNote from "./sub-component/EditNote" // Not done yet

import { Route } from "react-router-dom";

class MainPageContainer extends Component {

  render() {
    // console.log("MainContent: this.props.noteArray", this.props.noteArray);
    return (
      <div className="RouteContainer">
        <Route
          exact
          path="/"
          render={props => <NoteList noteArray={this.props.noteArray} />}
        />
        <Route path="/note/create" component={CreateNoteItem} />
        {/* <Route component={EditNote} /> */}
      </div>
    );
  }
}

const mapStateToProps = state => {
  
  return {
    noteArray: state.notes
  };
};

export default connect(mapStateToProps, { fetchNotes })(MainPageContainer);
