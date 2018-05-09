import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addNote, viewNotes, editNote, deleteNote } from './actions';
import { BrowserRouter as Router } from 'react-router-dom';
import Sidebar from './components/Sidebar';

class App extends Component {
  render() {
    return (
      <Router>
        <Sidebar addNote={this.props.addNote}
                 viewNotes={this.props.viewNotes}
                 editNote={this.props.editNote}
                 deleteNote={this.props.deleteNote}
                 notes={this.props.notes} />
      </Router>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    notes: state.notes
  }
}

export default connect(mapStateToProps, { addNote, viewNotes, editNote, deleteNote })(App);
