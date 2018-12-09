import React, { Component } from 'react';
import './App.css';
import { Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import Navigation from './components/Navigation';
import NotesList from './components/NotesList';
import NoteForm from './components/NoteForm';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <Route exact path='/' render={() => <NotesList notesData={this.props.notes} />} />
        <Route exact path='/add-note' component={NoteForm} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    notes: state.notes,
  }
}

export default withRouter(
  connect(mapStateToProps, null)(App)
);

