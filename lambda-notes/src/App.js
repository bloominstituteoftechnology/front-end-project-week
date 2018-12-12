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
      notesCopy: [],
      filter: '',

    };
  }

  componentDidMount(){
    axios.get('https://fe-notes.herokuapp.com/note/get/all')
      .then(response => {
        console.log(response); 
        this.setState({notes: response.data, notesCopy: response.data}) 
      })
      .catch(err => console.log(err));
      
  }


  addNote = (event, newNote) => {
    event.preventDefault();
    console.log(newNote);
    axios.post('https://fe-notes.herokuapp.com/note/create', newNote)
    .then(response => {
      newNote._id = response.data.success; 
      this.setState({notes: [...this.state.notes, newNote]}); 
      console.log('response data app.js', response.data.success, newNote);})
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

  deleteNote = (event, _id) => {
    event.preventDefault();
    const filteredNotes = this.state.notes.filter(note => note._id !== _id);
    axios
      .delete(`https://fe-notes.herokuapp.com/note/delete/${_id}`)
      .then(response => {
        console.log('response in delete in App.js', response);
        this.setState({
          notes: filteredNotes
        });
      })
      .catch(err => console.log(err));
  };

  
  handleInputChange = event => {
    this.setState({
      filter: event.target.value,
    });
  };

  getFilteredNotes = () => {
    if (this.state.filter === '') return this.state.notes;

    return this.state.notes.filter(note => {
      let noteTitle = note.title.toLowerCase().includes(this.state.filter.toLowerCase());
      return noteTitle;
    });
  }


  sortedByTitle = () => {
    console.log('sorted function runs');
    let copy = this.state.notes.slice();
    const sorted = copy.sort(function(a, b){
      if (a.title.toLowerCase() < b.title.toLowerCase())
        return -1;
      if (a.title.toLowerCase() > b.title.toLowerCase())
        return 1;
      return 0;
    });
    this.setState({
      ...this.state,
      notes: sorted
    })
    console.log(sorted);
  }

  sortedByMostRecent = () => {
    let copy = this.state.notesCopy.slice();
    const sortedByRecent = copy.reverse();
    this.setState({
      ...this.state,
      notes: sortedByRecent
    })
  }


  render() {
    console.log('notesCopy', this.state.notesCopy);
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
                <Notes {...props} notes={this.state.notes} filter={this.state.filter} handleInputChange={this.handleInputChange} noteData={this.getFilteredNotes()} sortedByTitle={this.sortedByTitle} sortedByMostRecent={this.sortedByMostRecent}/>
              </div>
              );
            
            }} />

            
            <Route 
            path="/get/:_id" 
            render={props => <NoteView {...props} notes={this.state.notes} editNote={this.editNote}  deleteNote={this.deleteNote}/> } /> 

            <Route 
            path="/create" 
            render={props => <AddNote {...props} notes={this.state.notes} addNote={this.addNote}/> } />
          </div>
      </div>
    );
  }
}

export default App;
