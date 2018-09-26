import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, NavLink, withRouter } from 'react-router-dom';

import NoteContainer from './components/NoteContainer';
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
    // filling this out shortly
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
    console.log('add');
    // filling this out shortly
  }

  deleteNote = noteId => {
    // filling this out shortly
  }

  openUpdateForm = (e, id) => {
    e.preventDefault();
    // filling this out shortly
  }

  updateNote = noteId => {
    // filling this out shortly
  }

  render() {
    return (
      <div className="App">
         <ul className = 'navbar'>
          <li>
            <NavLink exact to = '/'
            activeClassName = 'activeNavButton' >
            View Your Notes</NavLink>
          </li>
          <li>
            <NavLink to = '/add-note'
            activeClassName = 'activeNavButton' >
            + Create New Note
            </NavLink>
          </li>
         </ul>
         <Route exact path = '/'
          render={props => (
           <NoteContainer {...props}
           notesList={this.state.notes}
           />
         )}
         />
         <Route
          path = '/:noteId'
          render={props => (
            <Note
            {...props}
            notesList = {this.state.notes}
            deleteNote = {this.deleteNote}
            openUpdateForm = {this.openUpdateForm}
            />
          )}
          />
          <Route
            path = '/add-note'
            render={props => (
              <AddNote
              {...props}
              note = {this.state.note}
              addNewNote = {this.addNewNote}
              handleChange = {this.handleChange}
              updateNote = {this.updateNote}
              isUpdating = {this.state.isUpdating}
            />
            )}
          />
      </div>
    );
  }
}

export default withRouter(App);
