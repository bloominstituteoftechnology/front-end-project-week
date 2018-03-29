import React, { Component } from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import List from "./components/List";
import CreateNewNote from "./components/CreateNewNote";
import styled from "styled-components";
import SingleNoteView from "./components/SingleNoteView";
import EditNote from "./components/EditNote";
import { deleteNote } from "./actions";

const StyledApp = styled.div`
  width: 100%;
  background: grey;
  height: 100%;

  .container {
    padding: none;
    margin: none;
    width: 74%;
  }
`;

class App extends Component {
  render() {
    return (
      <StyledApp>
        <Router>
          <div className="container">
          
            <Route path="/" component={List} exact />
            <Route path="/create-new-note" component={CreateNewNote} />
            <Route path="/single-note-view/:id" component={SingleNoteView} />
            <Route path="/edit-note/:id" component={EditNote} />
          </div>
        </Router>
      </StyledApp>
    );
  }
}

const mapStateToProp = state => {
  return {
    notes: state.notes
  };
};

export default connect(null, { deleteNote })(App);
