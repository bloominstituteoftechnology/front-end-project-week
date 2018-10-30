import React, { Component } from 'react';
import './App.css';
import Nav from './components/Nav/Nav';
import Notes from './components/Notes/Notes';
import CreateNote from './components/CreateNote/CreateNote';
import { Route } from 'react-router-dom';
import { fetchAll } from './actions';
import { connect } from 'react-redux';

class App extends Component {

  componentDidMount() {
    this.props.fetchAll();
  }

  render() {
    return (
      <div className="App">
        <Nav />
        <Route exact path="/" render={() => <Notes notes={this.props.notes} />} />
        <Route path="/new" render={() => <CreateNote />} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    notes: state.notesReducer.notes,
    fetching: state.notesReducer.fetching,
    fetched: state.notesReducer.fetched,
    adding: state.notesReducer.adding,
    added: state.notesReducer.added,
    editing: state.notesReducer.aditing,
    edited: state.notesReducer.edited,
    deleting: state.notesReducer.deleting,
    deleted: state.notesReducer.deleted,
    error: state.notesReducer.error
  }
}

export default connect(mapStateToProps, {
  fetchAll
})(App);
