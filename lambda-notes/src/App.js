import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';

import NotesList from './components/NotesList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NotesList notesData={this.props.notes} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    notes: state.notes,
  }
}

export default connect(mapStateToProps, null)(App);
