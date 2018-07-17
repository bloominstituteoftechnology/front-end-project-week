import React from "react";
import styled from "styled-components";
import { Route } from "react-router-dom";

import ListView from "../ListView/ListView";
import NoteView from "../NoteView/NoteView";
import EditView from "../EditView/EditView";
import CreateNewView from "../CreateNewView/CreateNewView";

import Sample from "../../placeholder JSON/Sample";

const StyledWindow = styled.div`
  position: relative;
  top: 0;
  left: 220px;
  background-color: #f3f3f3;
  border-top: 1px solid black;
  border-right: 1px solid black;
  border-bottom: 1px solid black;
  height: 100vh;
  width: 668px;
`;

class ContentWindow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      possibleViews: ["note", "new", "edit", "list"],
      currentView: "list",
      deleteModalVisible: false,
      content: Sample,
      selectedNote: "01"
    };
  }
  render() {
    return (
      <StyledWindow>
        <Route
          exact
          path="/"
          render={props => <ListView {...props} content={this.state.content} />}
        />

        {/* un-hard-code-me */}
        <Route
          path="/note"
          render={props => (
            <NoteView {...props} selected={this.state.content[0]} />
          )}
        />

        <Route path="/new" component={CreateNewView} />

        {/* un-hard-code-me */}
        <Route
          path="/edit"
          render={props => (
            <EditView {...props} selected={this.state.content[0]} />
          )}
        />
      </StyledWindow>
    );
  }
}

export default ContentWindow;
