import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import { Route } from 'react-router-dom';
import styled from 'styled-components';
import NotesContainer from './containers/NotesContainer';
import Note from './components/Note';
import NoteForm from './components/NoteForm';
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

  render() {
    return (
      <StyledApp>
        <Route path='/' component={NavBar} />
        <Route exact path='/' render={props => <NotesContainer {...props} notes={this.state.notes} />} />
        <Route exact path='/notes/:id' render={props => <Note {...props} notes={this.state.notes} />} />
        <Route path='/create' render={props => <NoteForm {...props} addNote={this.addNote} />} />
      </StyledApp>
    );
  }
}

export default App;
