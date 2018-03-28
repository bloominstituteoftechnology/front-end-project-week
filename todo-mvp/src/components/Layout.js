import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import NavBar from './NavBar/NavBar';
import ListNotes from './ListNotes/ListNotes';
import CreateNote from './CreateNote/CreateNote';
import ViewNote from './ViewNote/ViewNote';
import UpdateNote from './UpdateNote/UpdateNote';

import dummyNotes from '../dummydata';

import './Layout.css';

class Layout extends Component {
  constructor() {
    super();
    this.state = {
      notes: [],
      title: '',
      content: '',
      id: Number(''),
      count: 9,
    };

    this.createNote = this.createNote.bind(this);
    this.newTitle = this.newTitle.bind(this);
    this.newContent = this.newContent.bind(this);
    this.deleteNote = this.deleteNote.bind(this);
    this.updateNote = this.updateNote.bind(this);
  }

  componentDidMount() {
    this.setState({ notes: dummyNotes });
  }

  createNote(event) {
    event.preventDefault();

    const note = {};
    note.title = this.state.title;
    note.content = this.state.content;
    note.id = this.state.count;

    this.setState({
      notes: [...this.state.notes, note],
      title: '',
      content: '',
      id: Number(''),
      count: this.state.count + 1,
    });
  }

  deleteNote(event) {
    event.preventDefault();
    const newNotes = this.state.notes.filter( note => note.id !== Number(event.target.value) )
    this.setState({
      notes: newNotes,
      title: '',
      content: '',
      id: Number(''),
    })
  }

  updateNote(id) {
    const updateNote = {};
    updateNote.id  = id;
    updateNote.title =  this.state.title;
    updateNote.content = this.state.content;

    let copyNotes  = this.state.notes;
    let updateIndex = copyNotes.findIndex(note => note.id == updateNote.id)
    copyNotes.splice(updateIndex, 1, updateNote);

    this.setState({
      notes: copyNotes,
      title: '',
      content: '',
      id: Number(''),
    })
  }

  newTitle(event) {
    this.setState({
      title: event.target.value,
    });
  }

  newContent(event) {
    this.setState({
      content: event.target.value,
    });
  }

  render() {
    return (
      <div className="Layout">
        <NavBar />
        <div>
          <Route
            exact
            path="/"
            render={() => 
            <ListNotes notes={this.state.notes} />}
          />
          
          <Route 
          path="/create" 
          render={() => 
          <CreateNote
          newTitle={this.newTitle} 
          newContent={this.newContent} 
          createNote={this.createNote} 
          title={this.state.title} 
          content={this.state.content} />} 
          />

          <Route 
          path="/view/:id" 
          render={(props) => 
          <ViewNote 
          note={this.state.notes.filter( note => note.id  == props.match.params.id)[0]}
          deleteNote={this.deleteNote} />} 
          />

          <Route
          path="/update/:id"
          render={(props) => 
          <UpdateNote 
          note={this.state.notes.filter( note => note.id  == props.match.params.id)[0]}
          newTitle={this.newTitle} 
          newContent={this.newContent} 
          updateNote={this.updateNote}
          title={this.state.title} 
          content={this.state.content} />} 
          />
        </div>
      </div>
    );
  }
}

export default Layout;
