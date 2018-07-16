import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchData } from './actions';
import SideBar from './components/SideBar';
import Notes from './components/Notes';
import './App.css';

class App extends Component {
  componentDidMount() {
    this.props.fetchData();
  }

  render() {
    return (
      <div>
        <SideBar />
        {this.props.fetching ? <h1>Fetching the notes...</h1> : null}
        <Notes notes={this.props.notes} />
      </div>
    );
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
