import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';

import Notes from './components/Notes';
import CreateNote from './components/CreateNote';
import EditNote from './components/EditNote';
import './App.css';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      notes: [
        {
          tags: [],
          _id: 0,
          title: 'Note Title #1',
          textBody: `Morbi pellentesque euismod venenatis. Nulla ut nibh nunc. Phasellus
             diam metus, blandit ac purus a, efficitur mollis ...`,
        },
        {
          tags: [],
          _id: 1,
          title: 'Note Title #2',
          textBody: `Morbi pellentesque euismod venenatis. Nulla ut nibh nunc. Phasellus
             diam metus, blandit ac purus a, efficitur mollis ...`,
        },
        {
          tags: [],
          _id: 2,
          title: 'Note Title #3',
          textBody: `Morbi pellentesque euismod venenatis. Nulla ut nibh nunc. Phasellus
             diam metus, blandit ac purus a, efficitur mollis ...`,
        },
        {
          tags: [],
          _id: 3,
          title: 'Note Title #4',
          textBody: `Morbi pellentesque euismod venenatis. Nulla ut nibh nunc. Phasellus
             diam metus, blandit ac purus a, efficitur mollis ...`,
        },
      ],
    };
  }

  handleSubmit = note => {
    this.setState(prevState => ({
      notes: [note, ...prevState.notes],
    }));
  };

  editNote = note => {
    let newNotes = this.state.notes.slice();
    newNotes = newNotes.map(oldNote => {
      if (oldNote._id === note._id) {
        return note;
      }
      return oldNote;
    });
    this.setState({ notes: newNotes });
  };

  render() {
    return (
      <div className="app-container">
        <h1>Lambda Notes</h1>
        <NavLink to="/">View Your Notes</NavLink>
        <NavLink to="/create">+ Create New Note</NavLink>
        <Route
          exact
          path="/"
          render={() => <Notes notes={this.state.notes} />}
        />
        <Route
          path="/create"
          render={() => <CreateNote onSubmit={this.handleSubmit} />}
        />
        <Route
          path="/edit/:id"
          render={props => (
            <EditNote
              {...props}
              notes={this.state.notes}
              onSubmit={this.editNote}
            />
          )}
        />
      </div>
    );
  }
}
