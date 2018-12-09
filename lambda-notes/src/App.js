import React, { Component } from 'react';
import './App.css';
import { Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { fetchNotes } from './actions';

import Navigation from './components/Navigation';
import NotesList from './components/NotesList';
import NoteForm from './components/NoteForm';
import IndividualNote from './components/IndividualNote';

class App extends Component {
  componentDidMount(){
    this.props.fetchNotes();
  }

  componentDidUpdate() {
    if (this.props.addingNotes || this.props.editingNotes || this.props.deletingNotes) {
      this.props.fetchNotes();
    }
  }

  render() {
    return (
      <div className="App">
        <Navigation />
        <Route exact path='/' render={props => <NotesList {...props} notesData={this.props.notes} />} />
        <Route exact path='/add-note' component={NoteForm} />
        <Route exact path='/note/:id' render={props => <IndividualNote {...props} notesData={this.props.notes}/>} />
        <Route exact path='/edit-note/:id' render={props => <NoteForm {...props} notesData={this.props.notes} edit/>} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    notes: state.notes,
    addingNotes: state.addingNotes,
    editingNotes: state.editingNotes,
    deletingNotes: state.deletingNotes,
  }
}

export default withRouter(
  connect(mapStateToProps, { fetchNotes })(App)
);

