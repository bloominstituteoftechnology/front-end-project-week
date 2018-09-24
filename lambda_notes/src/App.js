import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { Route, withRouter } from 'react-router-dom';

import Navigation from './components/Navigation/Navigation';
import NoteContainer from './components/NoteComponents/NoteContainer';

class App extends Component {
  state = {
    notes: [{
      _id: 0,
      title: 'Lets',
      textBody: 'Go!',
    },
    {
      _id: 2,
      title: 'Blah Blah',
      textBody: 'hneausseuof',
    },
    {
      _id: 3,
      title: 'hhhhhhh',
      textBody: 'hhhhhhhhhhhhhhhhhhhhhhh',
    }],
  };

  render() {
    return (
      <div>
        <Navigation />
        <Route exact path="/" render={ props =>
          <NoteContainer {...props}
          notes={this.state.notes} />
          } />
      </div>
    );
  }
}

export default App;
