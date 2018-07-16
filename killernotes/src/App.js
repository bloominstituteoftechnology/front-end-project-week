import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchData } from './actions';
import Notes from './components/Notes';
import './App.css';

class App extends Component {
  componentDidMount() {
    this.props.fetchData();
  }

  render() {
    return <Notes notes={this.props.notes} />;
  }
}

const mapStateToProps = state => {
  return {
    notes: state.notes,
    fetching: state.fetchingNotes,
    fetched: state.fetchedNotes,
    error: state.error,
  };
};

export default connect(
  mapStateToProps,
  { fetchData },
)(App);
