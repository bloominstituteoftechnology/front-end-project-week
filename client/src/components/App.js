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

// database
import firebase from '../firebase';
import 'firebase/database';

class App extends Component {
  state = {
    title: '',
    content: '',
    noteList: [],
  };

  // setInputVal
  setInputVal = e => {
    this.setState({ [e.target.name]: e.target.value });
  }

  // adds new note to `this.state.noteList`
  addNewNote = (e, props) => {
    e.preventDefault();
    const { title, content } = this.state;
    const notesRef = firebase.database().ref('notes');
    notesRef.push({ title, content });
    props.history.push('/');
  }

  // setEditNoteValues
  setEditNoteValues = (e, props, id, title, content) => {
    e.preventDefault();
    firebase.database().ref(`notes/${ id }`).set({ title, content });
    props.history.push('/');
  }

  // setEditValues
  setEditValues = (title, content) => {
    this.setState({ title, content });
  }

  // handleDeleteNote
  handleDeleteNote = id => {
    firebase.database().ref(`notes/${ id }`).remove();
  }

  /*****************************************
  ** component rendering for react router **
  *****************************************/
  // <NoteView />
  returnNoteView = props => {
    const { state: { noteList }, setSelectedNote } = this;
    return <NoteView { ...props } noteList={ noteList } setSelectedNote={ setSelectedNote }/>;
  }
  
  // <Note />
  returnNoteComponent = props => {
    const { state: { noteList }, setEditValues, handleDeleteNote } = this;
    return (
      <Note
        { ...props }
        noteList={ noteList }
        setEditValues={ setEditValues }
        handleDeleteNote={ handleDeleteNote }
      />
    );
  }

  // <NewNote />
  returnNewNoteComponent = props => {
    const { state: { title, content }, setInputVal, addNewNote } = this;
    return (
      <NewNote
        { ...props }
        setInputVal={ setInputVal }
        setTextAreaVal={ setInputVal }
        title={ title }
        content={ content }
        buttonOnClick={ addNewNote }
      />
    );
  }

  // <NoteEdit />
  returnNoteEdit = props => {
    const { state: { noteList, title, content }, setInputVal, setEditNoteValues } = this;
    return (
      <NoteEdit
        { ...props }
        noteList={ noteList }
        title={ title }
        setInputVal={ setInputVal }
        setTextAreaVal={ setInputVal }
        content={ content }
        buttonOnClick={ setEditNoteValues }
      />
    );
  }
  
  // adds data to `this.state.noteList`
  // data currently comes from `/src/data.json`
  componentDidMount() {
    const notesRef = firebase.database().ref('notes');
    notesRef.on('value', snapshot => {
      const noteList = [];
      for (let note in snapshot.val()) {
        noteList.push({ id: note, title: snapshot.val()[note].title, content: snapshot.val()[note].content });
      }
      this.setState({ noteList });
    })
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
