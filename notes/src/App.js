import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import axios from 'axios';

import './App.css';
import Menu from './Components/Menu/Menu';
import NoteList from './Components/Notes/NoteList';
import NoteForm from './Components/Notes/NoteForm';
import DisplayNote from './Components/Notes/DisplayNote';

/*
let dummyData = [{
  "tags": ["tag", "otherTag"],
  "title": "Note Title",
  "textBody": "Note Body",
}];
*/

class App extends Component {
  constructor() {
    super();
    this.state = {
      notes: undefined,
      title: '',
      textBody: '',
    }
  }

  componentDidMount() {
    this.getNotes();
  }

  getNotes = () => {
    axios.get('https://fe-notes.herokuapp.com/note/get/all')
    .then(response => {
      this.setState({
        notes: response.data,
      })
    })
    .catch(response => {
      console.log(response);
    });
    this.setState({
      title: '',
      textBody: '',
    })
  }

  createNote = () => {
    axios.post('https://fe-notes.herokuapp.com/note/create', {title: this.state.title, textBody: this.state.textBody})
    .then(() => {
      this.getNotes();
    })
    .catch(response => {
      console.log(response);
    })
  }

  updateNote = (id) => {
    axios.put(`https://fe-notes.herokuapp.com/note/edit/${id}`, {title: this.state.title, textBody: this.state.textBody})
    .then(() => {
      this.getNotes();
    })
    .catch(response => {
      console.log(response);
    })
  }

  deleteNote = (id) => {
    axios.delete(`https://fe-notes.herokuapp.com/note/delete/${id}`)
    .then(() => {
      this.getNotes();
    })
    .catch(response => {
      console.log(response);
    })
  }

  updateValue = e => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  render() {
    if (this.state.notes === undefined) {
      return (
        <div className="App">
          <nav className='menu'>
            <h1>Lambda<br/>Notes</h1>
            <Menu />
          </nav>
          <main className='notes'>
            <h2>Loading note data....</h2>
          </main>
        </div>
      )
    }
    return (
      <div className="App">
        <nav className='menu'>
          <h1>Lambda<br/>Notes</h1>
          <Menu />
        </nav>
        <main className='notes'>
          <Route exact path='/'
            render={(props) => <NoteList {...props} notes={this.state.notes}/>}
          />
          <Route path='/notes/create'
            render={(props) => <NoteForm {...props} type='Create' title={this.state.title} textBody={this.state.textBody} updateValue={this.updateValue} createNote={this.createNote} />}
          />
          <Route exact path='/note/:id'
            render={(props) => <DisplayNote {...props} notes={this.state.notes} deleteNote={this.deleteNote}/>}
          />
          <Route path='/note/:id/edit'
            render={(props) => <NoteForm {...props} type='Edit' notes={this.state.notes} title={this.state.title} textBody={this.state.textBody} updateValue={this.updateValue} updateNote={this.updateNote} />}
          />
        </main>
      </div>
    );
  }
}

export default App;
