import React, { Component } from "react";
import styled from "styled-components";
import NoteListView from "./NoteListView";
import { Route } from "react-router-dom";
import axios from "axios";
import NoteView from "./NoteView.js";
import CreateNote from "./CreateNote.js";
import DeleteNote from "./DeleteNote.js";
import EditNote from "./EditNote.js";

const NoteMainContentContainer = styled.div`
  display: table-cell;
  width: 80%;
  vertical-align: top;
  padding-left: 30px;
`;

class MainContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [],
      loading: true
    };
  }

  componentDidMount() {
    axios
      .get(`https://fe-notes.herokuapp.com/note/get/all`)
      .then(response => {
        this.setState({
          notes: response.data,
          loading: false
        });
      })
      .catch(err => console.log(err));
  }

  refreshMain = response => {
    window.location.reload();
  };

  render() {
    return (
      <NoteMainContentContainer>
        <Route
          path="/"
          exact
          render={props => (
            <NoteListView
              {...props}
              notes={this.state.notes}
              loading={this.state.loading}
            />
          )}
        />
        <Route
          path={`/notes/:id`}
          render={props => (
            <NoteView
              {...props}
              toggleDeleteScreen={this.toggleDeleteScreen}
              refreshMain={this.refreshMain}
            />
          )}
        />
        <Route
          path={`/create`}
          render={props => (
            <CreateNote {...props} refreshMain={this.refreshMain} />
          )}
        />
        <Route
          path={`/notes/delete/:id`}
          render={props => (
            <DeleteNote {...props} refreshMain={this.refreshMain} />
          )}
        />
        <Route
          path={`/edit/:id`}
          render={props => (
            <EditNote {...props} refreshMain={this.refreshMain} />
          )}
        />
      </NoteMainContentContainer>
    );
  }
}

export default MainContent;
