// Dependencies
import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import fuzzyFilterFactory from 'react-fuzzy-filter';
// Components
import CreateNoteView from './views/CreateNoteView';
import EditNoteView from './views/EditNoteView';
import NoteView from './views/NoteView';
import NotesView from './views/NotesView';
import Sidebar from './components/Sidebar';
// Styles
import './styles/App.css';

const { InputFilter, FilterResults } = fuzzyFilterFactory();

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route
          component={routerProps => (
            <Sidebar {...routerProps} InputFilter={InputFilter} />
          )}
        />
        {/* Routes */}
        <Route
          exact
          path="/"
          component={routerProps => (
            <NotesView {...routerProps} FilterResults={FilterResults} />
          )}
        />
        <Route path="/create-note" component={CreateNoteView} />
        <Route path="/note/:id/edit" component={EditNoteView} />
        <Route exact path="/note/:id" component={NoteView} />
      </div>
    );
  }
}

export default App;
