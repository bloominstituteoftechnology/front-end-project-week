import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getNotes } from '../actions';
import NotesList from './NotesList';

class App extends Component {

  componentDidMount() {
    this.props.getNotes()
  }

  render() {
    return (
      <div>
        <h1> Hello World </h1>
        <NotesList />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    fetching: state.fetching,
    notes: state.notes,
    error: state.errorMessage,
  }
}

export default connect(mapStateToProps, { getNotes })(App);
