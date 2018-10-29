import React, { Component } from 'react';
import axios from 'axios';
import NoteList from './components/NoteList'
import NoteForm from './components/NoteForm'
import NavBar from './components/NavBar'
import NoteCard from './components/NoteCard'
import {Route, Link } from 'react-router-dom'
import './App.css';

class App extends Component {
  constructor() {
    super()
      this.state = {
        notes: [],
      }
  }

  componentDidMount() {
    axios
      .get('https://killer-notes.herokuapp.com/note/get/all')
      .then(res => this.setState({notes: res.data}))
      .catch(error => console.log(error))
  }

 createNote = (noteData) => {
   axios
      .post('https://killer-notes.herokuapp.com/note/create', noteData ) 
      .then(res => this.setState({notes: res.data}) )
      .catch(err => console.log(err))
  }

  render() {
    return (
      <div className="App">
        <NavBar />
        <NoteForm createNote={this.createNote} />
        <Route path={'/note/:id'} render={(props) => <NoteCard {...props}  />} />
        <div className='note-container'>
        {this.state.notes.map(note => (
              <div className='note-card'>
              <div className='note-card-text'>
                <h3>{note.title}</h3>
                  <div className='note-card-text-body'>
                    <p>{note.textBody}</p>
                  </div>
              </div>
              </div>
        ))}
        </div>

</div>
    );
  }
}

export default App;
