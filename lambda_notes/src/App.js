import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import { Route } from 'react-router-dom';
import styled from 'styled-components';
import NotesContainer from './containers/NotesContainer';
import Note from './components/Note';
import NoteForm from './components/NoteForm';
import DeleteModal from './components/DeleteModal';
import EditNote from './components/EditNote';
import data from './demoData';

const StyledApp = styled.div`
  display: flex;
  flex-flow: row;
  height: 100vh;
  `;

class App extends Component { 
  constructor(){
    super();
    this.state = {
      notes: [],
      id: 0,
    }
  }

  componentDidMount(){
    //This is just to set the current id higher than the dummy datas, delete when calling the API for notes
    let newId = data.reduce((acc,item) => {
      if(item.id > acc ){
        acc = item.id + 1
      }
      return acc}, 0)
    // Again, don't forget to remove the id state variable when using the API
    this.setState({notes: data, id: newId});
  }

  addNote = (title, body) => {
    let newNotes = this.state.notes.slice();
    newNotes.push({tags: [], title: title, textBody: body, id: this.state.id});
    this.setState({notes: newNotes, id: this.state.id + 1});
  }

  deleteNote = (id) => {
    let newNotes = this.state.notes.slice().filter(note => note.id !== Number(id));
    this.setState({notes: newNotes});
  }

  editNote = (id, title, body) => {
    console.log(id, title,body);
    let newNotes = this.state.notes.slice().map(note => {
      if(note.id === Number(id)){
        return {
          tags: [],
          title: (title || note.title),
          textBody: (body || note.textBody),
          id: note.id,
        }
      }
      return note;
    })
    this.setState({notes: newNotes});
  }

  render() {
    return (
      <StyledApp>
        <Route path='/' component={NavBar} />
        <Route exact path='/' render={props => <NotesContainer {...props} notes={this.state.notes} />} />
        <Route path='/notes/:id' render={props => <Note {...props} notes={this.state.notes} />} />
        <Route path='/create' render={props => <NoteForm {...props} addNote={this.addNote} />} />
        <Route exact path='/notes/:id/delete' render={props => <DeleteModal {...props} deleteNote={this.deleteNote} /> } />
        <Route path='/edit/:id' render={props => <EditNote {...props} editNote={this.editNote} /> } />
      </StyledApp>
    );
  }
}

export default App;
