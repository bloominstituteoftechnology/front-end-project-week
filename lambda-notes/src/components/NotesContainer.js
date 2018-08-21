import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import dummyData from '../dummy-data';
import Sidebar from './Sidebar';
import NotesList from './NotesList';
import NotePage from './NotePage';
import NewNote from './NewNote';
import EditNote from './EditNote';

class NotesContainer extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      title: "",
      content: ""
    }
  }

  componentDidMount() {
    this.setState({ data: dummyData})
  }

  inputHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  addNewNote = (e) => {
    e.preventDefault();
    let copy = this.state.data.slice();
    copy.push({ id: this.state.data[this.state.data.length-1].id+1, title: this.state.title, content: this.state.content})
    this.setState({ data: copy });
  }

  deleteNote = (id) => {
    let filtered = this.state.data.filter(note => note.id !== id);
    this.setState({ data: filtered });
  }

  editNote = (id) => {
    id = parseInt(id, 10);
    let copy = this.state.data.slice();
    let i = copy.findIndex(note => note.id === id);
    copy.splice( i, 1, { id: id, title: this.state.title, content: this.state.content} )
    this.setState({ data: copy });
  }

  render() {
    return (
      <div className='notes-container'>
        <Sidebar />
      <div className='main-content'>
        <Route
          exact path="/"
          render={(props) => <NotesList {...props} data={this.state.data} />}
          />
        <Route
          path="/create-new-note"
          render={(props) => <NewNote {...props} handleChange={this.inputHandler} addNewNote={this.addNewNote} />}
          />
        <Route
          exact path="/notes/:id"
          render={(props) => <NotePage {...props} data={this.state.data} deleteNote={this.deleteNote} />}
          />
        <Route
          path="/notes/:id/edit-note"
          render={(props) => <EditNote {...props} handleChange={this.inputHandler} editNote={this.editNote} />}
          />
        </div>
      </div>
    );
  }
}

export default NotesContainer;
