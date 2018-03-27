import React, { Component } from 'react';
// import './App.css';
import { Route, Switch } from 'react-router-dom';
import NotesList from './components/notesList';
import NoteForm from './components/noteForm';
import Navigation from './components/navigation';
import Note from './components/note';

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="d-flex">
          <Navigation />
        <div className="container">
        <Switch>
          <Route path='note/' component={ Note } />
          <Route path="/noteForm" component={ NoteForm } />
          <Route path="/" component={ NotesList } />
        </Switch>
        </div>
        </div>
      </div>
    );
  }
}

export default App;
