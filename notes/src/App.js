import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Route } from 'react-router-dom';
import * as actions from './actions'


class App extends Component {
  componentDidMount() {
    this.props.fetchNotes();
  }
  render() {
    return (
      <div className="App">
      <h1>Lambda Notes</h1>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    fetching: state.fetching,
    fetched: state.fetched,
    notes: state.notes,
    error: state.error,
  }
}

export default withRouter(connect(mapStateToProps, actions)(App))
