import React, { Component } from 'react';
import { Route } from 'react-router';

// components
import Sidebar from './sidebar/Sidebar';
import NoteView from './noteview/NoteView';
import NewNote from './newnote/NewNote';
import Note from './noteview/Note';

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
      id: this.state.noteList.length,
      title: this.state.title,
      content: this.state.content,
    };

    this.setState({ noteList: [ newNote, ...this.state.noteList ] });
  }

  // sets currently selected note for dynamic routing
  setSelectedNote = id => {
    let currentNote = {};

    for (let note of this.state.noteList) {
      if (id === note.id) {
        currentNote = { ...note };
      }
    }

    this.setState({ selectedNote: { ...currentNote } });
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
          render={ props => {
            return <NoteView { ...props } noteList={ this.state.noteList } setSelectedNote={ this.setSelectedNote }/>
            }
          }
        />
        
        {/* NewNote */}
        <Route
          path='/note/new'
          render={ props => {
            return (
              <NewNote
                { ...props }
                setInputVal={ this.setInputVal }
                title={ this.state.title }
                content={ this.state.content }
                buttonOnClick={ this.addNewNote }
              />
            )}
          }
        />

        {/* Note (specific note) */}
        <Route
          path='/note/:id'
          render={ props => {
            return <Note { ...props } noteList={ this.state.noteList }/> 
          }}
        />
      </div>
    );
  }
}

export default App;
