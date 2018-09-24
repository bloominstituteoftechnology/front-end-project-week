import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, NavLink, withRouter } from 'react-router-dom';

import AllNotes from './components/AllNotes';
import Note from './components/Note';
import AddNote from './components/AddNote';

class App extends Component {
  constructor() {
    super();
    this.state = {
      notes: [],
      note: {
        title: '',
        body: ''
      },
      isUpdating: false,
    }
  }

  componentDidMount() {
    //get note data
  }

  handleChange = e => {
    this.setState({
      note: { 
        ...this.state.note,
        [e.target.name]:
        e.target.value,
      }
    });
  }

  addNewNote = e => {
    e.preventDefault();
    console.log('adding new');
    //add new note
  }

  deleteNote = noteId => {
    //delete note
  }

  openUpdateForm = (e, id) => {
    e.preventDefault();
    //open update form
  }

  updateNote = noteId => {
    //update note
  }

  render() {
    return (
      <div className="App">
       <ul className="navbar">
        <li>
          <NavLink exact to="/"
          activeClassName="activeNavButton" >
          View Your Notes</NavLink>
        </li>
        <li>
          <NavLink to="/add-note"
          activeClassName="activeNavButton" >
          + Create New Note
          </NavLink>
        </li>
       </ul>
       <Route exact path="/"
        render={props => (
         <AllNotes {...props}
         notesList={this.state.notes}
         />
       )}
       />
       <Route
        path="/:noteId"
        render={props => (
          <Note 
          {...props}
          notesList={this.state.notes}
          deleteNote={this.deleteNote}
          openUpdateForm={this.openUpdateForm}
          />
        )}
        />
        <Route
          path="/add-note"
          render={props => (
            <AddNote
            {...props}
            note={this.state.note}
            addNewNote={this.addNewNote}
            handleChange={this.handleChange}
            updateNote={this.updateNote}
            isUpdating={this.state.isUpdating}
          />
          )}
        />
      </div>
    );
  }
}

export default withRouter(App);
