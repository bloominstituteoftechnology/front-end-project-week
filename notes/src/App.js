import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom';

import NoteList from './components/Functional/NoteList';
import NoteForm from './components/Functional/NoteForm';
import ViewPage from './components/Functional/ViewPage';

import './App.css';

class App extends Component {
  render() {
    return (
      <Route render={({ location }) => (
        <styleApp>
          <Navigation>
            <h1>Lambda Notes</h1>
            <Link to='/' className='link'>
            View Notes</Link>
            <Link to='/noteform' className='link'>
            Create NoteForm
            </Link>
            </Navigation>
            <Main>
      )}
    );
  }
}

export default App;
