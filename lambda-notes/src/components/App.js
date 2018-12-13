import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { fetchNotes, addNote, viewNote, editNote, deleteNote } from '../store/actions';
import Navigation from './Navigation';
import NotesList from './NotesList';
import NewNote from './NewNote';
import NoteView from './NoteView';
import EditNote from './EditNote';

const AppDiv = styled.div`
  display: flex;
  flex-direction: row;
  height: 90vh;
  margin-top: 5vh;
  overflow-y: scroll;
`

class App extends Component {

  componentDidMount() {
    this.props.fetchNotes();
  }

  render() {
    return (
      <AppDiv>
        <Navigation />
        <Route exact path="/" render={routerProps => 
          <NotesList
            {...routerProps}
            fetching={this.props.fetching}
            notes={this.props.notes}
          />} 
        />
        <Route exact path="/create" render={routerProps =>
          <NewNote
            {...routerProps}
            addNote={this.props.addNote}
          />} 
        />
        <Route exact path="/:id" render={routerProps =>
          <NoteView
            {...routerProps}
            deleteNote={this.props.deleteNote}
            fetching={this.props.fetching}
            note={this.props.note}
            viewNote={this.props.viewNote}
          />}
        />
        <Route exact path="/edit/:id" render={routerProps =>
          <EditNote 
            {...routerProps}
            editNote={this.props.editNote}
            note={this.props.note}
            // deleteNote={this.props.deleteNote}
          />}
        />
      </AppDiv>
    );
  }

}


function mapStateToProps(state, ownProps) {
  return {
    ...ownProps,
    note: state.note,
    notes: state.notes,
    fetching: state.fetching,
  }
}


function mapDispatchToProps(dispatch){
  return {
    fetchNotes: () => dispatch(fetchNotes()),
    addNote: note => dispatch(addNote(note)),
    viewNote: id => dispatch(viewNote(id)),
    editNote: (id, note) => dispatch(editNote(id, note)),
    deleteNote: id => dispatch(deleteNote(id))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
