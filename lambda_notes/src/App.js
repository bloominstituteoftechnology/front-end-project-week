import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { Route, withRouter } from 'react-router-dom';

import Navigation from './components/Navigation/Navigation';
import NoteContainer from './components/NoteComponents/NoteContainer';
import NoteCreateForm from './components/NoteComponents/NoteCreateForm';
import NotePage from './components/NoteComponents/NotePage';

class App extends Component {
  state = {
    notes: [{
      id: 0,
      title: 'Lets',
      textBody: 'Go!',
    },
    {
      id: 1,
      title: 'Blah Blah',
      textBody: 'hneausseuof',
    },
    {
      id: 2,
      title: 'hhhhhhh',
      textBody: 'hhhhhhhhhhhhhhhhhhhhhhh',
    }],
    ids: 2,
    isUpdating: false,
    note: null,
  };

  addNote = (e, note) => {

    this.setState(prevState => ({
      notes: [...this.state.notes, {
        id: note.id,
        title: note.title,
        textBody: note.textBody,
      }],
      ids: note.id++,
    }), () => this.props.history.push('/'));

  };

  removeNote = (e, id) => {
    e.preventDefault();

    let notes = this.state.notes.map(note => note).filter(note => note.id !== id);

    this.setState({notes: notes}, () => this.props.history.push('/'));
  }

  updateNote = (id, note) => {
    let nNote = this.state.notes.map(note => note).filter(note => note.id !== id);
    nNote.push(note);
    // console.log('NEW_NOTE',nNote)
    this.setState({notes: nNote, isUpdating: false});
  }

  updateNoteForm = (e, id) => {
    e.preventDefault();
    const note = this.state.notes.map(note => note).filter(note => note.id === parseInt(id, 10));
    this.setState({isUpdating: !this.state.isUpdating, note: note}, () => this.props.history.push('/create-note'))
  }

  render() {
    return (
      <div>
        <Navigation />
        <Route exact path="/" render={ props =>
          <NoteContainer {...props}
            notes={this.state.notes} />
        } />
        <Route exact path="/create-note" render={ props =>
          <NoteCreateForm {...props} addNote={this.addNote} ids={this.state.ids} isUpdating={this.state.isUpdating} updateNote={this.updateNote} note={this.state.note}/>
        } />
        <Route path="/notes/:id" render={ props => 
          <NotePage {...props}
            notes={this.state.notes}
            updateNote={this.updateNoteForm}
            removeNote={this.removeNote} />
        } />
      </div>
    );
  }
}

export default withRouter(App);
