import React from 'react';
import {NavLink, Route, withRouter} from 'react-router-dom';
import HomeView from './views/HomeView';
import NotesListView from './views/NotesListView';
import NoteView from './views/NoteView';
import NoteFormView from './views/NoteFormView';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
      <ul className="nav-bar">
        <li>
          <NavLink exact to="/" activeClassName="activeNavButton" style={{textDecoration: 'none', color: 'gray'}}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/note-form" activeClassName="activeNavButton" style={{textDecoration: 'none', color: 'gray'}}>
            Add Note
          </NavLink>
        </li>
      </ul>
      <Route exact path="/" component={HomeView} />
      <Route
        exact
        path="/notes"
        component={NotesListView}
      />
      <Route
        path="/notes/:noteId"
        component={NoteView}
      />
      <Route
        path="/note-form"
        component={NoteFormView}
      />
    </div>
    );
  }
}

export default withRouter(App);
