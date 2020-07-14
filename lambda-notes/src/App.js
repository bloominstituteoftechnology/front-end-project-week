import React, { Component } from 'react';
import { Route, Link } from "react-router-dom";
import { Row, Col, Container, Input, Button } from "reactstrap";
import logo from './logo.svg';
import Nyancat from './Nyancat.gif';
import './App.css';
import NoteList from './Components/NoteList';
import NoteView from './Components/NoteView';
import NewNote from './Components/NewNote';

const placeHolder = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";

const initialNotes =   [
  {
  id: 1,
  title: "First Note",
  content: placeHolder + placeHolder
},
{
  id: 2,
  title: "Second Note",
  content: placeHolder + placeHolder
},
{
  id: 3,
  title: "Third Note",
  content: placeHolder + placeHolder + placeHolder
},
{
  id: 4,
  title: "Fourth Note",
  content: placeHolder + placeHolder + placeHolder + placeHolder
}
];



class App extends Component {
  constructor(props) {
    super(props);
    let currentNotes = localStorage.getItem("notes") ? JSON.parse(localStorage.getItem("notes")) : initialNotes;
      this.state = {
        notes: currentNotes,
      };
  }
  deleteNote(id) {
    this.setState({
      notes: this.state.notes.filter(note => {
        return note.id !== id;
      })
    })
    localStorage.setItem("notes", JSON.stringify(this.state.notes));
  }

  addNote(newNote) {
    var id = 1;
    if (this.state.notes.length > 0) {
      let notes = this.state.notes;
      for (let i = 0; i < notes.length; i++) {
        if (id < notes[i].id) {
          id = notes[i].id;
        }
      }
      id++
    }
    const addedNote = {
      id: id,
      title: newNote.title,
      content: newNote.content
    }
    let newNotes = [...this.state.notes, addedNote];
    this.setState({ notes: newNotes });
    localStorage.setItem("notes", JSON.stringify(newNotes));
  }
  // componentDidMount() {
  //   let value = JSON.parse(localStorage.getItem("notes"));
  //   console.log(value);
  //   this.setState({notes: value});

  // }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={Nyancat} className="App-logo" alt="logo" />
          <h1 className="App-title">Lambda Notes</h1>
          <Link to="/"><Button>View Your Notes</Button></Link>

          <Link to="/create"><Button>Create New Note</Button></Link>

        </header>
        <Container>
          <Col sm="9">
            <Route exact path="/"
              render={props => {
                return <NoteList notes={this.state.notes} />;
              }} />
            <Route exact path="/note/:id"
              render={props => {
                return (
                  <NoteView {...props}
                    notes={this.state.notes}
                    deleteNote={this.deleteNote.bind(this)}
                  />
                );
              }} />
            <Route path="/create"
              render={props => {
                return (
                  <NewNote
                    notes={this.state.notes}
                    addNote={this.addNote.bind(this)}
                  />
                );
              }}
            />
          </Col>
        </Container>
      </div>
    );
  }
}

export default App;
