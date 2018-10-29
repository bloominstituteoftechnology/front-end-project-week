import React, { Component } from 'react';
import './App.css';
import { fetchNotes, addNote, deleteNote, singleNote } from './actions'
import Navigation from './components/navigation';
import NotesList from './components/notesList';
import { connect } from 'react-redux';
import { Route } from'react-router-dom';
import AddNoteForm from './components/addNoteForm';

class App extends Component {
  constructor() {
    super();
    this.state = {
      noteTitle: '',
      noteContent: ''
    }
  }
  componentDidMount() {
    this.props.fetchNotes();
  }
  render() {
    return (
      <div className="App">
        <Navigation />
        <Route exact path='/' render={()=>
          <NotesList notes={this.props.notes} />
        } />
        
        <Route path='/new-note' render={()=>
          <AddNoteForm  />
        } />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    notes: state.notes,
    fetching: state.fetching 
  };
};

export default connect(mapStateToProps,{ fetchNotes, addNote, deleteNote, singleNote })(App);
