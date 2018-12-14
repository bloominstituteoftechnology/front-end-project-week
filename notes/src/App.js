import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Notes from './components/Notes';
import NoteForm from './components/NoteForm';
import NotesMenu from './components/NotesMenu';
import { connect } from 'react-redux';
import styled from 'styled-components';
//import { Route, Link } from 'react-router-dom';

import { fetchNotes, addNote, changeView, editNote, deleteNote } from './actions/';

//styled components
const AppContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: top;
  flex-direction: row;
  height: 100%;
`;

const DeleteWrapper = styled.div`

`;

class App extends Component {

  componentDidMount() {
    this.props.fetchNotes();
  }

  componentDidUpdate(prevProps, prevState){

  }

  render() {
    if(this.props.fetchingNotes || this.props.fetchingNote || this.props.updatingNote || this.props.addingNote || this.props.deletingNote || this.props.changingView){
      console.log('-------------- LOADING --------------');
      return <h4>Loading...</h4>
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
      }else if(this.props.currentView === "delete"){
        return (
          <React.Fragment>
            <AppContainer>
              <DeleteWrapper>
                <NotesMenu {...this.props} />
                <NoteForm {...this.props} />
              </DeleteWrapper>
            </AppContainer>
          </React.Fragment>
        );
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
  fetchingNote: state.fetchingNote,
  fetchingNotes: state.fetchingNotes,
  addingNote: state.addingNote,
  updatingNote: state.updatingNote,
  deletingNote: state.deletingNote,
  error: state.error,
  currentView: state.currentView,
  note: state.note
});

export default connect(
  mapStateToProps,
  { fetchNotes, addNote, changeView, editNote, deleteNote }
)(App);

