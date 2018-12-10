import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import './App.css';
import NotesListView from './views/NotesListView';
import Note from './components/Note';

import { getNotes } from './actions/';

class App extends Component {

  componentDidMount() {
    this.props.getNotes();
  }

  render() {
    return (
      <div className="App">
        <Route exact path="/" render={props => <NotesListView {...props} notes={this.props.notes} /> } />
        <Route path="/note/:noteId" render={props => <Note {...props} notes={this.props.notes} />} />
      </div>
    );
  }
}

const mapStatetoProps = state => {
  console.log(state);
  return {
      notes: state.notes,
      fetchingNotes: state.fetchingNotes,
      error: state.error
  }
}

export default withRouter(connect(mapStatetoProps, { getNotes })(App));