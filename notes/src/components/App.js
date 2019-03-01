import React, { Component } from 'react';
import './App.css';
import Notes from './Notes';
import NotesForm from './NotesForm';
import { getNotes } from '../actions';
import { connect } from 'react-redux';

class App extends Component {
  componentDidMount() {
    this.props.getNotes();
  }
  
  render() {
    return (
      <div className="App">
        <h1>Lambda Notes</h1>
          <NotesForm />
          <div className="container">
              <Notes notes={this.props.notes} />
          </div>
      </div>
    );
  }
}

const mapStateToProp = state => {
  const { notesReducer } = state;
  return {
    notes: notesReducer.notes,
    error: notesReducer.error,
    gettingNotes: notesReducer.gettingNotes
  };
};

export default connect (mapStateToProp, { getNotes })(App);
