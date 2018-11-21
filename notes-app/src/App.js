import './App.css'

import axios from 'axios'
import React, { Component } from 'react'
import { Link, NavLink, Route } from 'react-router-dom'

import CreateNoteForm from './components/CreateNoteForm'
import DeleteNote from './components/DeleteNote'
import EditNote from './components/EditNote'
import Note from './components/Note'
import NoteList from './components/NoteList'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      notes: []
    }
  }

  componentDidMount() {
    axios
      .get(`https://fe-notes.herokuapp.com/note/get/all`)
      .then(res => {
        this.setState({
          notes: res.data
        })
      })
      .catch(err => {
        console.log(err)
      })
  }

  addNote = note => {
    console.log(note)
    axios
      .post("https://fe-notes.herokuapp.com/note/create", note)
      .then(res => {
        this.setState({
          notes: res.data
        })
      })
      .catch(err => console.log(err))
  }

  render() {
    let notes = this.state.notes
    return (
      <div className="App">
        <div className="side-navbar">
          <h1>Lambda Notes</h1>
          <Link to="/">
            <button className="nav-link">View Your Notes</button>
          </Link>

          <Link to="/note-form">
            <button className="nav-link">+ Create New Note</button>
          </Link>
        </div>
        <div className="notes-application">
          <Route
            exact
            path="/"
            render={props => <NoteList {...props} notes={notes} />}
          />
          <Route
            exact
            path="/note-form"
            render={props => (
              <CreateNoteForm {...props} addNote={this.addNote} />
            )}
          />
          <Route
            exact
            path="/notes/:id"
            render={props => <Note {...props} notes={notes} />}
          />
          <Route
            exact
            path="/notes/edit/:id"
            render={props => <EditNote {...props} notes={notes} />}
          />
          <Route
            exact
            path="/notes/:id/delete"
            render={props => {
              return <Note {...props} />, <DeleteNote {...props} />
            }}
          />
        </div>
      </div>
    )
  }
}

export default App
