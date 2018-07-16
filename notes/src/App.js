import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { getNotes } from './Actions';
import NotesContainer from './Components/NotesContainer/NotesContainer'

class App extends Component {
  componentDidMount() {
  this.props.getNotes();
  }
  render() {
    return (
      <div className="App">
      <NotesContainer/>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    notes: state.notes,
    searchText: state.searchText,

  }
}

export default connect(mapStateToProps, { getNotes })(App);
