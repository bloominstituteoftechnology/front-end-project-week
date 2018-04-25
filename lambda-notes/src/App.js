import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { Container, Row, Col, Button } from 'reactstrap';

import NotesList from './components/notesList';
import CreateNote from './components/createNote';
import ViewNote from './components/viewNote';
import EditNote from './components/editNote';
import { testNotes } from './tests/testData';

import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      notes: testNotes,
      newNote: {
        title: '',
        content: ''
      },
      clickedNote: {
        title: '',
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
        return { title: updatedNoteData.title, content: updatedNoteData.content };
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
          <h2>Lambda<br />Notes</h2>
          <Link to="/"><Button className="btn-info btn-block">View Your Notes</Button></Link>
          <br />
          <Link to="create-note"><Button className="btn-info btn-block">+ Create New Note</Button></Link>
        </div>
        <div className="main-view">
          <Container className="mt-4">
            <Row>
              <div className="col-12">
                <Switch>
                  <Route exact path="/" render={() => <NotesList updateClickedNote={this.updateClickedNote} {...this.state} />} />
                  <Route path="/create-note" render={() => <CreateNote {...this.state} addNewNote={this.addNewNote} />} />
                  <Route path="/notes-view" render={() => <ViewNote {...this.state} deleteNote={this.deleteNote} />} />
                  <Route path="/edit-note" render={() => <EditNote {...this.state} updateEditedNote={this.updateEditedNote} />} />
                </Switch>
              </div>
            </Row>
          </Container>
        </div>
      </div>
      </Router>
    );
  }
}

export default App;
