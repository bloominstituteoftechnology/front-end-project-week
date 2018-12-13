



import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import { BrowserRouter as Router, Route, NavLink, Link } from 'react-router-dom';
import Form from './components/Form';
import YourNotes from './components/Notes';
import Note from './components/Note';
import Edit from './components/Edit';
import SearchBar from './components/SearchBar'




class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [],
      newNote: {
        tag: '',
        title: '',
        body: '',
      }
    }
  }

  componentDidMount() {
    axios
      .get('http://localhost:8000/api/notes')
      .then(response => {
        this.setState({ notes: response.data })
      })
      .catch(error => console.log('It\'s over! Turn back now!'))

  }



  addNote = (event, newNote) => {
    event.preventDefault();
    axios
      .post("http://localhost:8000/api/notes/post", newNote)
      .then(response => {
        newNote.id = response.data.success;
        this.setState({ notes: [newNote, ...this.state.notes] })
      })
      .catch(error => console.log('It\'s over! Turn back now!'))
  }

  editNote = (event, id, state) => {
    event.preventDefault();
    axios
    .put(`http://localhost:8000/api/notes/edit/${id}`, state)
    .then(response => {
      const updateArray = this.state.notes.map(note => {
        if (id === response.data.id) {
          return response.data;
        }
        return note;
      });
      
      console.log(updateArray)
        this.setState({ notes: updateArray });
      })
      .catch(error => console.log(error));
  }

  render() {
    return (
      <div className='container'>
        <div className="App">
          <div className="side-bar">
            <div className='lambda-notes'>
          <SearchBar/>
              <h1>Lambda</h1>
              <h1> Notes</h1>
            </div>
            <NavLink exact to='/'>
              <button className='side-button'>View Your Notes</button>
            </NavLink>
            <NavLink to='/create-new-note'>
              <button className='side-button'>+ Create New Note</button>
            </NavLink>
          </div>

          <Route
            exact path='/'
            render={props =>
              <YourNotes {...props} />
            } />

          <Route
            path='/create-new-note'
            render={props =>
              <Form {...props} addNote={this.addNote} />} />

          <Route
            path='/note/:id'
            render={props =>
              <Note
              {...props}
              />
            }
          />

          <Route
            path='/edit/:id'
            render={props =>
              <Edit {...props}
                editNote={this.editNote}
              />
            } />

        </div>
      </div>
    );
  }
}
export default App;