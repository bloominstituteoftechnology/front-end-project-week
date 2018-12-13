import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Notes from './components/Notes';
import NoteForm from './components/NoteForm';
import NotesMenu from './components/NotesMenu';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { Route, Link } from 'react-router-dom';

import { fetchNotes, addNote, changeView, editNote, deleteNote } from './actions/';

//styled components
const AppContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: top;
  flex-direction: row;
  border: 1px solid red;
  height: 100%;
`;

class App extends Component {

  componentDidMount() {
    this.props.fetchNotes();
  }

  render() {
    if(this.props.fetchingNotes){
      return <h4>Loading notes...</h4>
    }else{
      if(this.props.currentView === "notes"){
        return (
          <React.Fragment>
            <AppContainer>
              <NotesMenu {...this.props} />
              <Notes {...this.props} />
            </AppContainer>
          </React.Fragment>
        )
      }else{
        return (
          <React.Fragment>
            <AppContainer>
              <NotesMenu {...this.props} />
              <NoteForm {...this.props} />
            </AppContainer>
          </React.Fragment>
        );
      }
    }
  }
}

const mapStateToProps = state => ({
  notes: state.notes,
  fetchingNotes: state.fetchingNotes,
  addingNote: state.addingNote,
  updatingNote: state.updatingNote,
  deletingNote: state.deletingNote,
  error: state.error,
  currentView: state.currentView
});

export default connect(
  mapStateToProps,
  { fetchNotes, addNote, changeView, editNote, deleteNote }
)(App);

