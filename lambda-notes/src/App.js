import React, { Component } from 'react';
import axios from 'axios';
import {Route} from 'react-router-dom';
import styled from 'styled-components';

import NavSideBar from './components/NavSideBar';
import NotesList from './components/NotesList';
import CreateNote from './components/CreateNote';
import DisplayNote from './components/DisplayNote';
import EditNote from './components/EditNote';

const AppContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  max-width: 900px;
  width: 100%;
  height: 100vh;
  margin: 0 auto;
`;

const NavContainer = styled.div`
  display: flex;
  width: 30%;
  background-color: #d3d2d3;
  border: 2px solid #c2c3c2;
`;

const BodyContainer = styled.div`
  display: flex;
  width: 70%;
  background-color: #f2f1f2;
  border-top: 2px solid #ececec;
  border-right: 2px solid #ececec;
  border-bottom: 2px solid #ececec;
`;

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      notes: [],
      currentNoteID: '',
      error: ''
    }
  }

  componentDidMount(){
    axios.get('https://fe-notes.herokuapp.com/note/get/all')
    .then(response=>{
      this.setState({notes: response.data});
    })
    .catch(error=>{
      // TODO: Add error element to dom
      this.setState({error: 'Failed to load notes'});
    })
  }

  setCurrentNoteID = id=>{
    this.setState({currentNoteID: id});
  }

  addNote = note=>{
    axios.post('https://fe-notes.herokuapp.com/note/create', note)
    .then(response=>{
      const newNote = Object.assign({}, note, {'_id': response.data.success});
      const newNotes = this.state.notes;
      newNotes.push(newNote);
      this.setState({notes: newNotes});
    })
    .catch(error=>{
      this.setState({error: 'Failed to create note'});
    })
  }

  deleteNote = id=>{
    axios.delete(`https://fe-notes.herokuapp.com/note/delete/${id}`)
    .then(response=>{
      const index = this.state.notes.findIndex(note=>note._id===id);
      const newNotes = [...this.state.notes.slice(0, index), ...this.state.notes.slice(index + 1)];
      this.setState({notes: newNotes});
    })
    .catch(error=>{
      this.setState({error: 'Failed to delete note'});
    })
  }

  editNote = (id, note)=>{
    axios.put(`https://fe-notes.herokuapp.com/note/edit/${id}`, note)
    .then(response=>{
      const index = this.state.notes.findIndex(note=>note._id===id)
      const newNotes = this.state.notes;
      newNotes[index] = response.data;
      this.setState({notes: newNotes});
    })
    .catch(error=>{
      this.setState({error: 'Failed to update note'});
    })
  }

  render() {
    return (
      <AppContainer>

        <NavContainer>
          <Route path="/" render={props=><NavSideBar {...props}/>}/>
        </NavContainer>

        <BodyContainer>
          <Route exact path="/" render={props=><NotesList {...props} notes={this.state.notes} setCurrentNoteID={this.setCurrentNoteID}/>}/>
          <Route path="/note/:id" render={props=><DisplayNote {...props} note={this.state.notes.find(note=>note._id===this.state.currentNoteID)} editNote={this.editNote} deleteNote={this.deleteNote} setCurrentNoteID={this.setCurrentNoteID}/>}/>
          <Route path="/create-note" render={props=><CreateNote {...props} addNote={this.addNote}/>}/>
          <Route path="/edit/:id" render={props=><EditNote {...props} note={this.state.notes.find(note=>note._id===this.state.currentNoteID)} editNote={this.editNote}/>}/>
        </BodyContainer>
        
      </AppContainer>
    );
  }
}

export default App;
