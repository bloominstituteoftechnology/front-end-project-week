import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchNotes } from '../actions';
import NotesList from './NotesList';
import '../styles/App.css';

const getURL = 'https://killer-notes.herokuapp.com/note/get/all';

class App extends Component {
  componentDidMount() {
    this.props.fetchNotes(getURL);
  }

  render() {
    return (
      <div className="App">
        <NotesList />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    fetchingNotes: state.fetchingNotes,
    notes: state.notes,
    error: state.error,
  }
}

export default connect(mapStateToProps, { fetchNotes })(App);
