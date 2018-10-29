import React, { Component } from 'react';
import './App.css';
import { } from './actions';
import { connect } from 'react-redux';
import NoteListView from './components/NoteListView';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NoteListView></NoteListView>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    fetchingNotes: state.fetchingNotes,
    notes: state.notes
  };
};

export default connect(
  mapStateToProps,
  { }
)(App);
