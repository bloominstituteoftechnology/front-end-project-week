import React, { Component, Fragment } from 'react';
import './App.css';
import NotesList from './Notes/NotesList.js';
import NoteForm from './Notes/NoteForm.js';
import { connect } from 'react-redux';
import { getNotes } from './Notes/notesActions';

class App extends Component {
  render() {
    // console.log(this.props.getNotes());
    return (
      <div className="App">
        <h1 className="App-title">Notes</h1>
        <NotesList notes={this.props.notes} />
        <NoteForm />
      </div>
    );
  }

  componentDidMount() {
    this.props.getNotes();
  }
}

const mapStateToProps = (state) => {
  return {
    notes: state.notes,
    isLoading: state.isLoading
  };
};

const actions = {
  getNotes
};

export default connect(mapStateToProps, actions)(App);
