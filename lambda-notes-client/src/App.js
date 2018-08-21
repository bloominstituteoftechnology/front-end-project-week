import React, { Component } from 'react';
import { BrowserRouter as Router, NavLink, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import './App.css';

import { deleteNote, editNote, addNote } from './store/actions'; 

import Home from './Home';
import NotesContainer from './containers/NotesContainer';
import AddNoteForm from './components/forms/AddNoteForm';
import NoteDescription from './components/notes/NoteDescription';
import EditNoteForm from './components/forms/EditNoteForm';



class App extends Component {
  state = {
    atHome: false
  }

  atHomeToggle = () => {
    this.setState(prevState => {
      return { atHome: !prevState.atHome }
    })
  }

  deleteNote = (id) => {
    this.props.deleteNoteHandler(id);
  }

  editNote = (content) => {
    this.props.editNoteHandler(content);
  }
  
  addNote = (content) => {
    this.props.addNoteHandler(content);
  }

  render() {
    return (
      <Router>
        <div className="App">
          <header>
            <div>
              <NavLink exact strict to="/">Lambda Notes</NavLink>
            </div>
            <nav>
              <NavLink exact strict to="/notes">View Your Notes</NavLink>
              {this.state.atHome ? null : <NavLink to="/notes/add-note/">+Create New Note</NavLink>}
            </nav>
          </header>
          <Route exact strict path="/" render={props => <Home {...props} atHomeToggle={this.atHomeToggle} /> } />
          <Route exact strict path="/notes" render={props => <NotesContainer {...props} /> } />
          <Route path="/notes/add-note/" render={props => <AddNoteForm {...props} notes={this.props.notes} addNote={this.addNote} /> } />
          <Route exact strict path="/notes/:id" render={props => <NoteDescription {...props} notes={this.props.notes} deleteNote={this.deleteNote} /> } />
          <Route path="/notes/:id/edit" render={props => <EditNoteForm {...props} notes={this.props.notes} editNote={this.editNote} /> } />
        </div>
      </Router>
    );
  }
}

const mapStateToProps = state => ({
  notes: state.notes
})

const mapDispatchToProps = dispatch => ({
  deleteNoteHandler: id => {
    dispatch(deleteNote(id))
  },
  
  editNoteHandler: (content) => {
    dispatch(editNote(content))
  },

  addNoteHandler: (content) => {
    dispatch(addNote(content))
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
