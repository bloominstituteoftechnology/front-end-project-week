import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import NavBar from './components/NavBar';
import NoteList from './components/NoteList';
import CreateNote from './components/CreateNote';
import DisplayNote from './components/DIsplayNote'
import { Route } from 'react-router-dom';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      notes:[],
      error: ''
    };
  }
  componentDidMount(){
    this.fetchNotes();
  }

  fetchNotes = () => {
    axios
      .get('https://fe-notes.herokuapp.com/note/get/all')
      .then(response => {
        this.setState({ notes: response.data});
      })
      .catch(err => {
        console.log('Error')
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
      <div className="App">
        <NavBar />
        <Route exact path='/' render={props=> <NoteList notes={this.state.notes}/>}/>
        <Route path='/create-note' render={props=><CreateNote {...props} addNote={this.addNote}/>}/>
        <Route path='/:id' render={props=><DisplayNote {...props} notes={this.state.notes}/>}/>
      </div>
    );
  }
}

export default App;
