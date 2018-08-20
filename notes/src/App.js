import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { withRouter, Route } from 'react-router-dom';
import * as actions from './actions'
import Notes from './components/Notes';

class App extends Component {
  componentDidMount = () => {
    this.props.fetchNotes();
  }

  render() {
    return (
      <div>
        <h3>Welcome to Lambda Notes</h3>
        <Route path="/" render={props => (
          <Notes {...props} notes={this.props.notes} />
        )} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    fetchingNotes: state.fetchingNotes,
    notesFetched: state.notesFetched,
    notes: state.notes,
    error: state.error,
    updatingNote: state.updatingNote,
    noteUpdated: state.noteUpdated,
  }
}

export default withRouter(connect(mapStateToProps, actions)(App))
