import React, { Component } from "react";
import { Route, withRouter } from "react-router-dom";
import NavSideBar from "./containers/NavSideBar";
import NotesList from "./containers/NotesList";
import { getNotes, filterNotes, sortNotes } from "./store/actions";
import { connect } from "react-redux";
import AddNoteForm from "./components/AddNoteForm";
import EditNoteForm from "./components/EditNoteForm";
import Note from "./components/Note";
import styled, { createGlobalStyle } from "styled-components";
import Login from "./components/Login";

// ==============================
// ======   STYLED COMPS   ======
// ==============================

const GlobalStyles = createGlobalStyle`
  html, body {
    padding: 0;
    margin: 0;
    background: #f3f3f3;
    box-sizing: border-box;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

  }
`;

const AppDiv = styled.div`
  display: flex;
`;

// ==============================
// ======    COMPONENTS    ======
// ==============================

class App extends Component {
  componentDidMount = () => {
    this.props.getNotes();
  };

  render() {
    return (
      <AppDiv>
        <GlobalStyles />
        <NavSideBar />
        <Route exact path="/" component={Login} />
        <Route
          path="/notes"
          render={props => <NotesList {...props} notes={this.props.notes} />}
        />
        <Route path="/note/:noteId" render={props => <Note {...props} />} />
        <Route path="/note-add" component={AddNoteForm} />
        <Route path="/note-edit/:noteId" component={EditNoteForm} />
      </AppDiv>
    );
  }
}

const mapStateToProps = ({ notes, fetchingNotes, error }) => ({
  notes,
  fetchingNotes,
  error
});

export default withRouter(
  connect(
    mapStateToProps,
    { getNotes, filterNotes, sortNotes }
  )(App)
);
