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

  render() {
    return (
      <div>
        <Navigation />
        <Route exact path="/" render={ props =>
          <NoteContainer {...props}
            notes={this.state.notes} />
        } />
        <Route exact path="/create-note" render={ props =>
          <NoteCreateForm {...props} addNote={this.addNote} ids={this.state.ids} />
        } />
        <Route path="/notes/:id" render={ props => 
          <NotePage {...props}
            notes={this.state.notes} />
        } />
      </div>
    );
  }
}

export default withRouter(App);
