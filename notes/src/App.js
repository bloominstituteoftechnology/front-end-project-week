import React, { Component } from 'react';
//import './App.css';
import { connect } from 'react-redux';
import { withRouter, Route } from 'react-router-dom';
import * as actions from './actions'
import Notes from './components/Notes';

class App extends Component {
  componentDidMount() {
    this.props.fetchNotes();
  }
  render() {
    return (
      <div className="App">
      <h1>Lambda Notes</h1>
      <Route path="/" render={props => (
      <Notes {...props} notes={this.props.notes} />
      )} />
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
