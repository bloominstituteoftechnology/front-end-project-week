import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import axios from 'axios';

import './App.css';
import Menu from './Components/Menu/Menu';
import NoteList from './Components/Notes/NoteList';
import NoteForm from './Components/Notes/NoteForm';
import DisplayNote from './Components/Notes/DisplayNote';
import DeleteModal from './Components/Notes/DeleteModal';

/*
let dummyData = [{
  "tags": ["tag", "otherTag"],
  "title": "Note Title",
  "content": "Note Body",
}];
*/

class App extends Component {
  constructor() {
    super();
    this.state = {
      notes: undefined,
    }
  }

  componentDidMount() {
    this.getNotes();
  }

  getNotes = () => {
    axios.get('http://localhost:5000/api/notes')
    .then(response => {
      this.setState({
        notes: response.data,
      })
    })
    .catch(response => {
      console.log(response);
    });
  }

  createNote = (note) => {
    axios.post('http://localhost:5000/api/notes', note)
    .then(() => {
      this.getNotes();
    })
    .catch(response => {
      console.log(response);
    })
  }

  updateNote = (id, note) => {
    axios.put(`http://localhost:5000/api/notes/${id}`, note)
    .then(() => {
      this.getNotes();
    })
    .catch(response => {
      console.log(response);
    })
  }

  deleteNote = (id) => {
    axios.delete(`http://localhost:5000/api/notes/${id}`)
    .then(() => {
      this.getNotes();
    })
    .catch(response => {
      console.log(response);
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
    else {
      return (
        <div className="App">
          <Route exact path='/note/:id/delete'
              render={(props) => <DeleteModal {...props} notes={this.state.notes} deleteNote={this.deleteNote} />}
          />
          <nav className='menu'>
            <h1>Lambda<br/>Notes</h1>
            <Menu />
          </nav>
          <main className='notes'>
            <Route exact path='/'
              render={(props) => <NoteList {...props} notes={this.state.notes}/>}
            />
            <Route path='/notes/create'
              render={(props) => <NoteForm {...props} type='Create' updateValue={this.updateValue} createNote={this.createNote} />}
            />
            <Route exact path='/note/:id'
              render={(props) => <DisplayNote {...props} notes={this.state.notes} deleteNote={this.deleteNote}/>}
            />
            <Route exact path='/note/:id/delete'
              render={(props) => <DisplayNote {...props} notes={this.state.notes} deleteNote={this.deleteNote}/>}
            />

            <Route path='/note/:id/edit'
              render={(props) => <NoteForm {...props} type='Edit' notes={this.state.notes} updateValue={this.updateValue} updateNote={this.updateNote} />}
            />
          </main>
        </div>
      );
    }
  }
}

export default App;
