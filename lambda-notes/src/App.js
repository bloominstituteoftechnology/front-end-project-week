import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { Button } from 'reactstrap';

import NotesList from './components/notesList';
import CreateNote from './components/createNote';
import ViewNote from './components/viewNote';
import EditNote from './components/editNote';
import { testNotes } from './tests/testData';
import LoginPage from './components/LoginPage';
import { PropsRoute, PublicRoute, PrivateRoute } from 'react-router-with-props';

import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      notes: testNotes,
      newNote: {
        title: '',
        tags: '',
        content: ''
      },
      clickedNote: {
        title: '',
        tags: '',
        content: ''
      }
    }
  }

  addNewNote = (newNote) => {
    newNote.id = Number(this.state.notes[this.state.notes.length - 1].id) + 1;
    this.setState({ notes: [...this.state.notes, newNote]});
  }

  updateEditedNote = (updatedNoteData) => {
    const updatedNotes = this.state.notes.map(note => {
      if (note.id === this.state.clickedNote.id) {
        return {...updatedNoteData, id: note.id};
      } else {
        return note;
      } 
    });

    this.setState({ notes: updatedNotes });
  }

  deleteNote = () => {
    const updatedNotes = this.state.notes.filter(note => note.id !== this.state.clickedNote.id);
    this.setState({ notes: updatedNotes });
  }

  updateClickedNote = (clickedNote) => {
    this.setState({ clickedNote: clickedNote });
  }

  render() {
    return (
      <Router>
      <div className="App">
        <div className="side-nav">
          <br />
          <h2>Lambda<br />Notes</h2><br />
          <Link to="/"><Button className="btn-custom btn-block">View Your Notes</Button></Link>
          <br />
          <Link to="create-note"><Button className="btn-custom btn-block">+ Create New Note</Button></Link>
        </div>
        <div className="main-view">
          <div className="main-view-inner">
                <Switch>
                  <Route path="/login" component={LoginPage}/>
                  <PrivateRoute exact path="/" authed={true} redirectTo="/login" component={NotesList} notes={this.state.notes} updateClickedNote={this.updateClickedNote} />} />
                  <PrivateRoute path="/notes-view" authed={true} redirectTo="/login" component={ViewNote} clickedNote={this.state.clickedNote} deleteNote={this.deleteNote} />} />
                  <PrivateRoute path="/create-note" authed={true} redirectTo="/login" component={CreateNote} addNewNote={this.addNewNote} />} />
                  <PrivateRoute path="/edit-note"  authed={true} redirectTo="/login" component={EditNote} clickedNote={this.state.clickedNote} updateEditedNote={this.updateEditedNote} />} />
                </Switch>
          </div>
        </div>
      </div>
      </Router>
    );
  }
}

export default App;
