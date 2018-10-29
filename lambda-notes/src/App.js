import React, { Component } from 'react';
import './App.css';
import { fetchNotes, addNote, deleteNote, singleNote } from './actions'
import Navigation from './components/navigation';
import NotesList from './components/notesList';
import { connect } from 'react-redux';

class App extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      body: ''
    }
  }
  componentDidMount() {
    this.props.fetchNotes();
  }
  render() {
    return (
      <div className="App">
        <Navigation />
        <NotesList notes={this.props.notes} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    notes: state.notes,
    fetching: state.fetching 
  };
};

export default connect(mapStateToProps,{ fetchNotes, addNote, deleteNote, singleNote })(App);
