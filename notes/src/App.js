import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { getNotes } from './actions';
import AddNote from './components/AddNote';
import NotesList from './components/NotesList';

class App extends Component {
  componentDidMount() {
    this.props.getNotes();
  }

  render() {
    return (
      <div className="App">
        <AddNote />
        {this.props.fetching ?
        <div>LOADING NOTES LIST...</div> :
        this.props.error ?
        <div>An error occurred. Perhaps you forgot to start the server?</div> :
        <NotesList />
        }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  notes: state.notes, // don't need this here?
  fetching: state.fetching,
  error: state.error
});

export default connect(mapStateToProps, { getNotes })(App);
