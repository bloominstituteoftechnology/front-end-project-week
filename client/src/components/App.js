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
    content: '',
    search: '',
    title: '',
    noteList: [],
    showDeleteModal: false
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

  // setShowDeleteModal
  setShowDeleteModal = () => {
    this.setState({ showDeleteModal: !this.state.showDeleteModal });
  }

  // handleDeleteNote
  handleDeleteNote = id => {
    firebase.database().ref(`notes/${ id }`).remove()
    this.setShowDeleteModal();
  }

  // handleSearchNotes
  handleSearchNotes = () => {
    if (this.state.search) {
      return this.state.noteList.filter(note => {
        const noteTitle = note.title.toLowerCase().match(this.state.search.toLowerCase());
        const noteContent = note.content.toLowerCase().match(this.state.search.toLocaleLowerCase());
        if (noteTitle) {
          return noteTitle;
        }
        return noteContent;
      });
    }
    return this.state.noteList;
  }

  /*****************************************
  ** component rendering for react router **
  *****************************************/
  // <NoteView />
  returnNoteView = props => {
    const { handleSearchNotes, setSelectedNote } = this;
    return <NoteView { ...props } noteList={ handleSearchNotes() } setSelectedNote={ setSelectedNote }/>;
  }
  
  // <Note />
  returnNoteComponent = props => {
    const {
      state: { noteList, showDeleteModal },
      setEditValues, handleDeleteNote
    } = this;
    return (
      <Note
        { ...props }
        noteList={ noteList }
        setEditValues={ setEditValues }
        handleDeleteNote={ handleDeleteNote }
        showDeleteModal={ showDeleteModal }
        setShowDeleteModal={ this.setShowDeleteModal }
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
      const snapshotVal = snapshot.val();
      for (let note in snapshotVal) {
        noteList.push({
          id: note,
          title: snapshotVal[note].title,
          content: snapshotVal[note].content
        });
      }
      this.setState({ noteList });
    })
  }
  
  // render
  render() {
    return (
      <div className="App">
        <Sidebar setInputVal={ this.setInputVal } search={ this.state.search }/>

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
