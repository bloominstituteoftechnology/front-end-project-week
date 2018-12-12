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
  border-top: 1px solid #979797;
  border-right: 1px solid #979797;
  border-bottom: 1px solid #979797;
  height: 100%;
  min-height: 100vh;
  width: 668px;
`;

class ContentWindow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      possibleViews: ["note", "new", "edit", "list"],
      currentView: "list",
      deleteModalVisible: true,
      content: Sample,
      selectedNote: "01"
    };
  }

  handleNewNote = note => {
    const newContent = this.state.content.map(note => note);
    newContent.push(note);
    this.setState({ content: newContent });
  };

  handleEditNote = note => {
    const newContent = this.state.content.map(note => note);
    const elementPos = newContent
      .map(function(x) {
        return x._id;
      })
      .indexOf(note._id);
    console.log("HANDLE EDIT NOTE ARRAY INDEX", elementPos);
    newContent.splice(elementPos, 1, note);
    console.log("HANDLE EDIT NEW CONTENT", newContent);
    this.setState({ content: newContent });
  };

  handleDeleteNote = note => {
    console.log("HANDLE DELETE NOTE CALLED!");
    console.log("NOTE PASSED TO HANDLE DELETE", note);
    let newContent = this.state.content.map(note => note);
    const elementPos = newContent
      .map(function(x) {
        return x._id;
      })
      .indexOf(note._id);
    console.log("ELEMENT POSITION", elementPos);
    newContent.splice(elementPos, 1);
    this.setState({ content: newContent });
    console.log("POST DELETE STATE", this.state);
  };

  render() {
    return (
      <StyledWindow>
        <Route
          exact
          path="/"
          render={props => <ListView {...props} content={this.state.content} />}
        />

        <Route
          path="/note/:_id"
          render={props => (
            <NoteView
              {...props}
              content={this.state.content}
              delHandler={this.handleDeleteNote}
            />
          )}
        />

        <Route
          path="/new"
          render={props => (
            <CreateNewView {...props} noteHandler={this.handleNewNote} />
          )}
        />

        <Route
          path="/edit/:_id"
          render={props => (
            <EditView
              {...props}
              content={this.state.content}
              editHandler={this.handleEditNote}
            />
          )}
        />
      </StyledWindow>
    );
  }
}

export default ContentWindow;
