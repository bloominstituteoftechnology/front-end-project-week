import React from "react";
import styled from "styled-components";

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
        {this.state.currentView === "list" ? (
          <ListView content={this.state.content} />
        ) : null}
        {/* un-hard-code-me */}
        {this.state.currentView === "note" ? (
          <NoteView selected={this.state.content[0]} />
        ) : null}
        {this.state.currentView === "new" ? <CreateNewView /> : null}
        {/* un-hard-code-me */}
        {this.state.currentView === "edit" ? (
          <EditView selected={this.state.content[0]} />
        ) : null}
      </StyledWindow>
    );
  }
}

export default ContentWindow;
