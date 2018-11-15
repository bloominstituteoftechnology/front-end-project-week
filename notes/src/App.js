import React, { Component } from 'react';

import Notes from './components/Notes';
import CreateNote from './components/CreateNote';
import './App.css';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      notes: [
        {
          tags: [],
          title: 'Note Title',
          textBody: `Morbi pellentesque euismod venenatis. Nulla ut nibh nunc. Phasellus
             diam metus, blandit ac purus a, efficitur mollis ...`,
        },
        {
          tags: [],
          title: 'Note Title',
          textBody: `Morbi pellentesque euismod venenatis. Nulla ut nibh nunc. Phasellus
             diam metus, blandit ac purus a, efficitur mollis ...`,
        },
        {
          tags: [],
          title: 'Note Title',
          textBody: `Morbi pellentesque euismod venenatis. Nulla ut nibh nunc. Phasellus
             diam metus, blandit ac purus a, efficitur mollis ...`,
        },
        {
          tags: [],
          title: 'Note Title',
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

  render() {
    return (
      <div className="app-container">
        <h1>Lambda Notes</h1>
        {/* <NavLink to="/">View Your Notes</NavLink> */}
        {/* <NavLink to="/create">+ Create New Note</NavLink> */}
        <Notes notes={this.state.notes} />
        <CreateNote onSubmit={this.handleSubmit} />
      </div>
    );
  }
}
