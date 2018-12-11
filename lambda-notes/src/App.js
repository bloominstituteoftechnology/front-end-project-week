import React, { Component } from 'react';
import axios from 'axios';
import { Route, NavLink } from 'react-router-dom';
import Notes from './components/Notes';
import AddNote from './components/AddNote';
import NoteView from './components/NoteView';

import './App.css';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [],
    };
  }

  componentDidMount(){
    axios.get('https://fe-notes.herokuapp.com/note/get/all')
      .then(response => {
        console.log(response); 
        this.setState({notes: response.data}) 
      })
      .catch(err => console.log(err));
      
  }

  addNote = (event, newNote) => {
    event.preventDefault();
    console.log(newNote);
    axios.post('https://fe-notes.herokuapp.com/note/create', newNote)
    .then(response => {
      newNote._id = response.data.success; //respone.data is an obj
      this.setState({notes: [...this.state.notes, newNote]}); 
      console.log('response data app.js', response.data.success);})
    .catch(err => console.log(err));

  }

  editNote= (event, editedNote, _id) => {
    event.preventDefault();
    const newNotes = this.state.notes.map(note => {
      if(note._id == _id) {
        return editedNote;
      } else {
        return note;
      }
    });
    console.log('newNotes', newNotes);
    axios
      .put(`https://fe-notes.herokuapp.com/note/edit/${_id}`, editedNote)
      .then(response => {
        console.log('edit note in app.js', response.data);
        this.setState({
          notes: newNotes
        });
      })
      .catch(err => console.log(err));

  };


  render() {
    return (
      <div className="App">
        <div className="main-container">
          <nav className="main-nav">
            <h1 className="nav-header">Lambda<br/> Notes</h1>
            <NavLink className="nav-link" to="/">View your notes</NavLink>
            <NavLink className="nav-link" to="/create">+ Create New Note</NavLink>
          </nav>
          <Route 
              exact 
              path="/"
              render={props => {
              return (
              <div>
                <Notes {...props} notes={this.state.notes} />
              </div>
              );
            
            }} />

            {this.state.notes.length &&
            <Route 
            path="/get/:_id" 
            render={props => <NoteView {...props} notes={this.state.notes} editNote={this.editNote}/> } /> }

            <Route 
            path="/create" 
            render={props => <AddNote {...props} notes={this.state.notes} addNote={this.addNote}/> } />
          </div>
      </div>
    );
  }
}

export default App;
