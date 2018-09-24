import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import './App.css';

import NoteList from './components/presentational/NoteList';
import NoteForm from './components/functional/NoteForm';
import ViewPage from './components/functional/ViewPage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="navigation">
          <Link to='/'>View Your Notes</Link>
          <Link to='/noteform'>+ Create New Note</Link>
        </div>
        <Route exact path='/' component={NoteList} />
        <Route path='/noteform' component={NoteForm} />
        <Route path='/notes/:id' render={props => <ViewPage {...props} />} />
      </div>
    );
  }
}

export default App;
