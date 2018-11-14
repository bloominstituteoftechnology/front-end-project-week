import React, { Component } from 'react';
import axios from 'axios';
import {Route} from 'react-router-dom';

import './App.css';
import NavSideBar from './components/NavSideBar';
import NotesList from './components/NotesList';
import CreateNote from './components/CreateNote';
import DisplayNote from './components/DisplayNote';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      notes: [],
      error: ''
    }
  }

  componentDidMount(){
    axios.get('https://fe-notes.herokuapp.com/note/get/all')
    .then(response=>{
      this.setState({notes: response.data});
    })
    .catch(error=>{
      this.setState({error: 'Failed to load notes'});
    })
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

  render() {
    return (
      <div>
        <NavSideBar/>

        <Route exact path="/" render={props=><NotesList notes={this.state.notes}/>}/>
        <Route path="/create-note" render={props=><CreateNote {...props} addNote={this.addNote}/>}/>
        <Route path="/:id" render={props=><DisplayNote {...props} notes={this.state.notes}/>}/>
      </div>
    );
  }
}

export default App;
