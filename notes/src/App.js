import React, { Component } from 'react';
import './App.css';
import { Route, NavLink, withRouter } from 'react-router-dom';

import AllNotes from './components/AllNotes';
import Note from './components/Note';
import NotesForm from './components/NotesForm';

class App extends Component {
  constructor() {
    super();
    this.state = {
      notes: [
        {
        id: 1,
        title: 'Test Note',
        content: 'Lorem ipsum whateverum'
        }
      ],
      note: {
        title: '',
        content: ''
      },
      isUpdating: false,
    }
  }

  componentDidMount() {
    //get data
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

  openUpdateForm = (event, id) => {
    event.preventDefault();
    console.log('open update')
    //open update form
    const noteToUpdate = this.state.notes.find(note => note.id === id);
    this.setState ({ isUpdating: true, note: noteToUpdate },
      () => this.props.history.push('/notesform'))
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
          <NavLink to="/notesform"
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
        exact
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
          exact
          path="/notesform"
          render={props => (
            <NotesForm
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
