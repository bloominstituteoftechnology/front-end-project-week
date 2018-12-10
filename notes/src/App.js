import React, { Component } from "react";
import { Route, NavLink } from "react-router-dom";
// import {connect} from 'react-redux';

// import { getNotes, addNote, deleteNote, editNote } from '../actions';

import NotesListView from './views/NotesListView';
import AddNoteView from './views/AddNoteView';
import Note from './components/Note';

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav>
          <h1 className="nav-header">Lambda Notes</h1>
          <div className="nav-links">
            <NavLink exact to="/">
              <button>View Your Notes</button>
            </NavLink>
            <NavLink to="/create-note">
              <button>+ Create New Note</button>
            </NavLink>
          </div>
        </nav>

        <Route
          path="/"
          component={NotesListView}
        />

        <Route
          path="/add-note"
          component={AddNoteView}
        />

        <Route
          path="/notes/:noteId"
          component={Note}
        />

      </div>
    );
  }
}

export default App;

// function mapStateToProps(state){
//   console.log(state);
//   return{
//     notes: state.notes,
//     isFetching: state.fetching,
//     error: state.error
//   };
// }

// export default connect(
//   mapStateToProps,
//   {getNotes, addNote, deleteNote, editNote}
// )(App);
