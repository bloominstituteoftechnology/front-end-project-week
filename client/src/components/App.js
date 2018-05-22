import React, { Component } from 'react';
import { Route } from 'react-router';

// components
import Sidebar from './sidebar/Sidebar';
import NoteView from './noteview/NoteView';
import NewNote from './newnote/NewNote';
import Note from './noteview/Note';
import NoteEdit from './noteedit/NoteEdit';

// presentational
import './App.css';
import logo from '../logo.svg';

import data from '../data.json';

class App extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      content: '',
      noteList: [],
      selectedNote: {},
    };
  }

  // setInputVal
  setInputVal = e => {
    this.setState({ [e.target.name]: e.target.value });
  }

  // adds new note to `this.state.noteList`
  addNewNote = () => {
    const newNote = {
      id: '' + this.state.noteList.length,
      title: this.state.title,
      content: this.state.content,
    };

    this.setState({ noteList: [ ...this.state.noteList, newNote ] });
  }

  // setEditNoteValues
  setEditNoteValues = (id, title, content) => {
    const newNoteList = [ ...this.state.noteList ];

    for (let i = 0; i < newNoteList.length; i++) {
      if (id === newNoteList[i].id) {
        newNoteList[i] = { id, title, content }
      }
    }

    this.setState({ title: '', content: '', noteList: [ ...newNoteList ] });
  }

  // setEditValues
  setEditValues = (title, content) => {
    this.setState({ title, content });
  }

  // setSelectedNote
  setSelectedNote = id => {
    let currentNote = {};

    for (let note of this.state.noteList) {
      if (id === note.id) {
        currentNote = { ...note };
      }
    }

    this.setState({ selectedNote: { ...currentNote } });
  }

  // handleDeleteNote
  handleDeleteNote = id => {
    const noteListCopy = [ ...this.state.noteList ];

    for (let i = 0; i < noteListCopy.length; i++) {
      if (id === noteListCopy[i].id) {
        noteListCopy.splice(i, 1);
      }
    }

    this.setState({ noteList: [ ...noteListCopy ] });
  }

  // component rendering for react router
  // <NoteView />
  returnNoteView = props => {
    return <NoteView { ...props } noteList={ this.state.noteList } setSelectedNote={ this.setSelectedNote }/>;
  }
  
  // <Note />
  returnNoteComponent = props => {
    return (
      <Note
        { ...props }
        noteList={ this.state.noteList }
        setEditValues={ this.setEditValues }
        handleDeleteNote={ this.handleDeleteNote }
      />
    );
  }

  // <NewNote />
  returnNewNoteComponent = props => {
    return (
      <NewNote
        { ...props }
        setInputVal={ this.setInputVal }
        setTextAreaVal={ this.setInputVal }
        title={ this.state.title }
        content={ this.state.content }
        buttonOnClick={ this.addNewNote }
      />
    );
  }

  // <NoteEdit />
  returnNoteEdit = props => {
    return (
      <NoteEdit
        { ...props }
        noteList={ this.state.noteList }
        title={ this.state.title }
        setInputVal={ this.setInputVal }
        setTextAreaVal={ this.setInputVal }
        content={ this.state.content }
        buttonOnClick={ this.setEditNoteValues }
      />
    );
  }
  
  // adds data to `this.state.noteList`
  // data currently comes from `/src/data.json`
  componentDidMount() {
    this.setState({ noteList: data });
  }

  
  // render
  render() {
    return (
      <div className="App">
        <Sidebar/>

        {/* NoteView */}
        <Route
          exact path='/'
          render={ props =>  this.returnNoteView(props) }
        />
        
        {/* NewNote */}
        <Route
          path='/note/new'
          render={ props => this.returnNewNoteComponent(props) }
        />

        {/* Note (specific note) */}
        <Route
          path='/note/:id'
          render={ props => this.returnNoteComponent(props) }
        />

        {/* NoteEdit */}
        <Route
          path='/note/edit/:id'
          render={ props =>  this.returnNoteEdit(props) }
        />
      </div>
    );
  }
}

export default App;
