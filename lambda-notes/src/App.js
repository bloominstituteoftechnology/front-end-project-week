import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { Button } from 'reactstrap';

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
          <h2>Lambda<br />Notes</h2>
          <Link to="/"><Button className="btn-info btn-block">View Your Notes</Button></Link>
          <br />
          <Link to="create-note"><Button className="btn-info btn-block">+ Create New Note</Button></Link>
        </div>
        <div className="main-view">
          <div className="main-view-inner">
          {/* <Container className="mt-4"> */}
          {/*   <Row> */}
          {/*     <div className="col-12"> */}
                <Switch>
                  <Route exact path="/" render={() => <NotesList notes={this.state.notes} updateClickedNote={this.updateClickedNote} />} />
                  <Route path="/notes-view" render={() => <ViewNote clickedNote={this.state.clickedNote} deleteNote={this.deleteNote} />} />
                  <Route path="/create-note" render={() => <CreateNote addNewNote={this.addNewNote} />} />
                  <Route path="/edit-note" render={() => <EditNote clickedNote={this.state.clickedNote} updateEditedNote={this.updateEditedNote} />} />
                </Switch>
          {/*     </div> */}
          {/*   </Row> */}
          {/* </Container> */}
          </div>
        </div>
      </div>
      </Router>
    );
  }
}

export default App;
