import React, { Component } from 'react';
import axios from 'axios';
import { Route } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

import './App.css';
import NotesList from './components/NotesList';
import CreateNote from './components/CreateNote';
import NoteView from './components/NoteView';
import EditView from './components/EditView';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      notes: [],
      title: '',
      textBody: '',
    }
  }

  postNote = (newNote) => {
    axios.post('https://fe-notes.herokuapp.com/note/create', newNote)
      .then(response => this.setState({ notes: response.data }))
      .catch(err => console.log(err))
  }

  deleteNote = id => {
    axios.delete(`https://fe-notes.herokuapp.com/note/delete/${id}`)
      .then(response => {
        this.setState({ notes: response.data })
      })
      .catch(err => console.log(err))
  }

  updateNote = updatedNote => {
    axios.put(`https://fe-notes.herokuapp.com/note/edit/${updatedNote._id}`, updatedNote)
      .then(response => {
        this.setState({ notes: response.data })
      })
      .catch(err => console.log(err))
  }

  render() {
    return (
      <div className="App">
        <h1>Lambda Notes</h1>

        <NavLink to="/">View Your Notes</NavLink>
        <NavLink to="/create">+Create New Note</NavLink>

        <Route exact path="/" component={NotesList} />
        <Route path="/create" render={ props => <CreateNote {...props} postNote={this.postNote} />}/>
        <Route path="/view/:id" render={ props => <NoteView {...props} deleteNote={this.deleteNote} />}/>
        <Route path="/edit/:id" render={ props => <EditView {...props} notes={this.state.notes} updateNote={this.updateNote} />}/>
      </div>
    );
  }
}

export default App;
