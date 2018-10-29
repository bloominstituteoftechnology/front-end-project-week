import React, { Component } from 'react';
import './App.css';
import { fetchNotes } from './actions';
import { connect } from 'react-redux';
import NoteListView from './components/NoteListView';

class App extends Component {
  constructor() {
    super();
    this.state = {

    }
  }

  componentDidMount() {
    this.props.fetchNotes();
  }

  render() {
    return (
      <div className="App">
        <NoteListView noteContent={this.props.notes}></NoteListView>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    fetchingNotes: state.notesReducer.fetchingNotes,
    notes: state.notesReducer.notes,
    error: state.notesReducer.erorr,
  };
};

export default connect(
  mapStateToProps,
  { fetchNotes }
)(App);
