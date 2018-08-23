import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import './App.css';
import NotesNav from './components/NotesNav';
import Notes from './components/Notes';
import NewNote from './components/NewNote';
import Note from './components/Note';
import EditNote from './components/EditNote';


class App extends Component {
  constructor() {
    super();
    this.state = {
      notes: [
        {
          id: 0,
          title: "Note 0",
          content: "Lorem ipsum dolor sit amet."
        },
        {
          id: 1,
          title: "Note 1",
          content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis est eu purus tristique posuere ut et orci. Integer a.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis est eu purus tristique posuere ut et orci. Integer a."
        },
        {
          id: 2,
          title: "Note 2 Has got a really reallly really really really long title",
          content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis est eu purus tristique posuere ut et orci. Integer a."
        },
        {
          id: 3,
          title: "Note 3",
          content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis est eu purus tristique posuere ut et orci. Integer a."
        }
      ],
      title: '',
      content: '',
      term: '',
    }
  }

  addNote = event => {
    event.preventDefault();
    const notes = this.state.notes.slice();
    notes.push({ content: this.state.content, title: this.state.title, id: Date.now() });
    this.setState({ notes, title: '', content: '' });
  }

  deleteNote = note => {
    let notes = this.state.notes.slice();
    for (let i = 0; i < notes.length; i++) {
      if (notes[i].id === note.id) {
        notes.splice(i, 1);
      }
    }
    this.setState({ notes })
  }

  editNote = note => {
    let notes = this.state.notes.slice();
    for (let i = 0; i < notes.length; i++) {
      if (notes[i].id === note.id) {
        notes[i] = note
      }
    }
    this.setState({ notes })
  }

  searchHandler = event => {
    this.setState({ term: event.target.value })
  }

  handleInputChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return (
      <div className="App">
        <NotesNav />
        <div className="main">
          <Route
            exact path="/notes"
            render={(props) => <Notes {...props} notes={this.state.notes} searchHandler={this.searchHandler} term={this.state.term}/>}
          />
          <Route
            exact path="/add"
            render={(props) => <NewNote {...props} notes={this.state.notes} title={this.state.title} content={this.state.content} addNote={this.addNote} handleInputChange={this.handleInputChange} />}
          />
          <Route
            exact path="/notes/:id"
            render={(props) => <Note {...props} notes={this.state.notes} deleteNote={this.deleteNote} />}
          />
          <Route
            exact path="/notes/:id/edit"
            render={(props) => <EditNote {...props} notes={this.state.notes} editNote={this.editNote} />}
          />
        </div>
      </div>
    );
  }
}

export default App;
