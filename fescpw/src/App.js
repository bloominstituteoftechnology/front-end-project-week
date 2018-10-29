import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import NotesPageView from './views/NotesPageView';
import NotesListView from './views/NotesListView';
import NoteView from './views/NoteView';
import NotesFormView from './views/NotesFormView';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={NotesPageView} />
          <Route exact path="/notes" component={NotesListView} />
          <Route path="/notes/:id" component={NoteView} />
          <Route path="/notes-form" component={NotesFormView} />
          <Route path="**" component={NotesPageView} />
        </Switch>
      </div>
    );
  }
}

export default App;
