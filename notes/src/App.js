import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import axios from 'axios';
import NavBar from './components/NavBar';
import NewNoteForm from './components/NewNoteForm';
import NotesList from './components/NotesList';
import NotesView from './components/NotesView';
import UpdateNote from './components/UpdateNote';
import DeleteNote from './components/DeleteNote';
import './App.css';


class App extends Component {

  constructor() {
    super();
    this.state = {
      notes: [],
      selected: {},
      remove: false
   }
}

componentDidMount(){
  axios.get('https://killer-notes.herokuapp.com/note/get/all')
  .then(response =>{
    this.setState({notes: response.data})
  })
  .catch(err => {
    console.log(err)
  })
}


handleChange = event => {
  this.setState({ [event.target.name]: event.target.value})
}


handleAddNote = event => {
  const notes = this.state.notes.slice();
  notes.push({
    title: this.state.title, 
    textBody: this.state.textBody, 
    id: Date.now() });
  this.setState({
    notes, 
    title: '', 
    textBody: ''
  });
}

handleSelectNote = id => {
  this.setState({selected: id});
}

handleTitleUpdate = event => {
  this.setState({
    selected: {
      id: this.state.selected.id,
      title: event.target.value,
      textBody: this.state.selected.textBody
    }
  })
}

handleBodyUpdate = event => {
  this.setState({
    selected: {
      id: this.state.selected.id,
      title: this.state.selected.title,
      textBody: event.target.value
    }
  })
}

handleUpdateNote = id => {
  let notes = this.state.notes.slice();
  for (let i=0; i<notes.length; i++){
    if (notes[i].id === Number(id)) {
      notes[i] = {
        id: this.state.selected.id,
        title: this.state.selected.title,
        textBody: this.state.selected.textBody
      };
    }
  }
  this.setState({ notes,selected: {} });
}

handleDeleteNote = id => {
  let notes = this.state.notes.slice();
  notes = notes.filter(note => note.id !== Number(id));
  this.setState({notes, selected: {}, remove: !this.state.remove })
}


  render() {
    console.log('logging state in App',this.state);
    return (
      <div className = "app">
        <Route path = "/" component={NavBar} />
        
        <Route exact path = "/" render={props =>
        (<NotesList {...props}
        notes={this.state.notes} 
        />
        )}
        />
        <Route path = "/form" render={props =>
        (<NewNoteForm {...props}
          title={this.state.title}
          textBody = {this.state.textBody}
          handleAddNote = {this.handleAddNote}
          handleChange = {this.handleChange}
          />
          )}
          />

          <Route path = "/edit/:id" render={props=>
          (<UpdateNote {...props}
          notes = {this.state.notes}
          selected = {this.state.selected}
          handleTitleUpdate = {this.handleTitleUpdate}
          handleBodyUpdate = {this.handleBodyUpdate}
          handleSelectNote = {this.handleSelectNote}
          handleUpdateNote = {this.handleUpdateNote}
          />
          )}
          />

          <Route path="/notes/:id" render={props =>
          (<NotesView {...props}
          note={this.state.notes}
          />
          )}
          />

          <Route path = "/notes/:id" render = {props=>
          (<DeleteNote {...props}
          handleSelectNote = {this.handleSelectNote}
          handleDeleteNote = {this.handleDeleteNote} 
          />
          )}
          />  

          
          
      </div>
      )
    }
  }

export default App;