import React, { Component } from "react";
import { Route } from "react-router-dom";
import { Row, Col, Container } from "reactstrap";

import NoteList from "./components/NoteList";
import NoteView from "./components/NoteView";
import CreateNote from "./components/CreateNote";
import Menu from "./components/Menu";
import "./App.css";

const placeholderText =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

const initialNotes = [
  {
    id: 1,
    title: "First Note NOTENOTENOTENOTENOTENOTENOTENOTE",
    content: placeholderText
  },
  { id: 2, title: "Second Note", content: placeholderText },
  {
    id: 3,
    title: "Third Note (Bigger size)",
    content: placeholderText + placeholderText + placeholderText
  },
  {
    id: 4,
    title: "Fourth Note (Second biggest)",
    content: placeholderText + placeholderText
  },
  { id: 5, title: "ZZZ Fifth Note", content: placeholderText },
  { id: 6, title: "Sixth Note", content: placeholderText },
  { id: 7, title: "Seventh Note", content: placeholderText }
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: initialNotes
    };
  }

  addNote = newNote => {
    const id = this.state.notes[this.state.notes.length - 1].id + 1;
    const addedNote = {
      id: id,
      title: newNote.title,
      content: newNote.content
    };
    this.setState({ notes: [...this.state.notes, addedNote] });
  };

  editNote = editedNote => {
    const newNotes = this.state.notes.map((note, index) => {
      if (editedNote.id === note.id) {
        note = editedNote;
      }
      return note;
    });
    this.setState({ notes: newNotes });
  };

  deleteNote = deleteId => {
    const newNotes = this.state.notes.filter(note => {
      return note.id !== deleteId;
    });
    this.setState({ notes: newNotes });
  };

  render() {
    return (
      <div className="App">
        <Container>
          <Row>
            <Col sm="3">
              <Route
                path="/"
                render={props => {
                  return <Menu notes={this.state.notes} />;
                }}
              />
            </Col>
            <Col sm="9">
              <Route
                exact
                path="/"
                render={props => {
                  return <NoteList notes={this.state.notes} />;
                }}
              />
              <Route
                exact
                path="/note/:id"
                render={props => {
                  return (
                    <NoteView
                      {...props}
                      notes={this.state.notes}
                      editNote={this.editNote}
                      deleteNote={this.deleteNote}
                    />
                  );
                }}
              />
              <Route
                path="/create"
                render={props => {
                  return (
                    <CreateNote
                      notes={this.state.notes}
                      addNote={this.addNote}
                    />
                  );
                }}
              />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
