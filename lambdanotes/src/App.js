import React, { Component } from 'react';
import './App.css';
import axios from 'axios'

import NotesList from './components/NotesList'
import CreateNewNote from './components/CreateNewNote'
import Home from './components/Home'

import { Route, Link } from 'react-router-dom'
import NoteView from './components/NoteView'

import UpdateNote from './components/UpdateNote'


class App extends Component {
  constructor(){
    super();
    this.state = {
      notes: [],
    }
  }

  componentDidMount(){
    axios
    .get(`https://fe-notes.herokuapp.com/note/get/all`)
    .then(response => {
        this.setState({ notes: response.data })
    })
    .catch(err => {
      console.log("Fail to GET notes from server", err)
    })
  }

  handleAddNewNote = note => {
    axios 
    .post(`https://fe-notes.herokuapp.com/note/create`, note)
    .then(response => {
            axios
              .get(`https://fe-notes.herokuapp.com/note/get/all`)
              .then(response => {
                  this.setState({ notes: response.data })
              })
              .catch(err => {
                console.log("Fail to GET notes from server", err)
              })
    })
    .catch(err => {
      console.log("Fail to POST a note to the server", err)
    })
  }

  handleDeleteNote = id => {
    axios 
    .delete(`https://fe-notes.herokuapp.com/note/delete/${id}`)
    .then(response => {
      //this.setState({ notes: response.data })
            axios
              .get(`https://fe-notes.herokuapp.com/note/get/all`)
              .then(response => {
                  this.setState({ notes: response.data })
              })
              .catch(err => {
                console.log("Fail to GET notes from server", err)
              })
    })
    .catch(err => {
      console.log("Fail to DELETE a note", err)
    })
  }

  handleUpdateNote = updatedNote => {
    axios 
    .put(`https://fe-notes.herokuapp.com/note/edit/${updatedNote.id}`, updatedNote)
    .then(response => {
      //this.setState({ notes: response.data })
      console.log(response.data)
            axios
            .get(`https://fe-notes.herokuapp.com/note/get/all`)
            .then(response => {
                this.setState({ notes: response.data })
            })
            .catch(err => {
              console.log("Fail to GET notes from server", err)
            })
    })
    .catch(err => {
      console.log("Fail to UPDATE a note", err)
    })
  }
  


  render() {
    return (
      <div className="App">
        <header className="App-header"> 
          <ul>
            <li>
              <Link to="/">HOME</Link>
            </li>
            <li>
              <Link to="/notes">View Your Notes</Link>
            </li>
            <li>
              <Link to="/create">Create New Notes</Link>
            </li>
          </ul>
        </header>

        <div className="Container">
              <Route exact path="/" component={Home} />

              <Route exact path="/notes" 
                render={props => <NotesList {...props} notes={this.state.notes}
                handleDeleteNote={this.handleDeleteNote}/> }
              />

              <Route exact path="/create" 
                render={props => <CreateNewNote {...props} handleAddNewNote={this.handleAddNewNote} />}
              />

      
              <Route path="/notes/:id"
                render={props => <NoteView {...props} handleDeleteNote={this.handleDeleteNote}/>}
              />

              <Route path="/edit/:id"
                render={props => <UpdateNote {...props} handleUpdateNote={this.handleUpdateNote} notes={this.state.notes}/>}
              />

              <p>
                Edit View (update).
              </p>
              <p>
                Delete Modal
              </p>
        </div>

      </div>
    );
  }
}

export default App;
