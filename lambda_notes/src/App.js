import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Route } from 'react-router-dom';
import SideNav from './Components/SideNav';
import CreateNewNote from './Components/CreateNewNote';
import NoteListView from './Components/NoteListView';
import SingleNoteView from './Components/SingleNoteView';


export default class App extends Component {
  constructor() {
    super();
    this.state= {
      noteList: [
        { noteTitle:'',
        noteText:''
    }
      ]
    }
  }

  addNewNote = (note) => {
    let noteList =[];
    const newNote = this.state.noteList;
    noteList.push(note);
    this.setState({noteList});
  }
  render() {
    return (
      <div>
        <SideNav />
      <NoteListView list={this.state.noteList} />
      <Route exact path='/' render={NoteListView} />
      <Route path='/' render={CreateNewNote} />
      <Route path='/' render={SingleNoteView} />
      
      
      </div>
    );
  }
}


