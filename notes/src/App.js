import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { withRouter, Route } from 'react-router-dom';
import * as actions from './actions'
import Notes from './components/Notes';
import NoteForm from './components/NoteForm';
import SingleNote from './components/SingleNote';
import Nav from './components/Nav';


class App extends Component {
  componentDidMount = () => {
    this.props.fetchNotes();
  }
  render() {
    return (
      <div className="App">
      <Nav className='nav-bar'/>
      <Route exact path="/" render={props => (
        <Notes {...props} notes={this.props.notes} fetch={this.props.fetch} fetching={this.props.fetching} />
      )} />
      <Route path="/notes/add" render={props => (
        <NoteForm {...props} addNote={this.props.addNote} />
      )} />
      <Route path="/notes/:id" render={props => (
          <SingleNote {...props} note={this.props.note} />
        )}  />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    fetching: state.fetching,
    fetched: state.fetched,
    notes: state.notes,
    error: state.error,
    fetchingNote: state.fetchingNotes,
    noteFetched: state.notesFetched,
    note: state.note,
    updating: state.updating,
  }
}

export default withRouter(connect(mapStateToProps, actions)(App));