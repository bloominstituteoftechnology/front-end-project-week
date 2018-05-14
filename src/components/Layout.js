import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import axios from 'axios'

import NavBar from './NavBar/NavBar'
import ListNotes from './ListNotes/ListNotes'
import CreateNote from './CreateNote/CreateNote'
import ViewNote from './ViewNote/ViewNote'
import UpdateNote from './UpdateNote/UpdateNote'
import Register from './Register/Register'
import Login from './Login/Login'

import './Layout.css'

// const serverURL = 'https://lambda-notes-server.herokuapp.com'
const serverURL = 'http://localhost:5000'
class Layout extends Component {
  constructor () {
    super()
    this.state = {
      notes: [],
      title: '',
      content: '',
      username: '',
      loading: false
    }
  }

  componentDidMount () {
    this.getNotes()
  }

  getNotes = () => {
    const token = localStorage.getItem('authorization')
    axios
      .get(`${serverURL}/api/notes`, { headers: { authorization: token } })
      .then((res) => {
        this.setState({
          notes: res.data.notes,
          username: res.data.username
        })
      })
      .catch((err) => console.log(err))
  }

  clearState = () => {
    this.setState({
      notes: [],
      title: '',
      content: '',
      username: ''
    })
  }

  createNote = (event, tags) => {
    event.preventDefault()
    const token = localStorage.getItem('authorization')
    const note = {}
    note.title = this.state.title
    note.content = this.state.content
    note.tags = tags
    console.log(note)
    axios
      .post(`${serverURL}/api/notes`, note, {
        headers: { authorization: token }
      })
      .then((res) => {
        console.log('res', res.data)
        this.setState({
          notes: res.data,
          title: '',
          content: ''
        })
      })
      .catch((err) => console.log(err))
  }

  deleteNote = (id) => {
    axios
      .delete(`${serverURL}/api/notes/${id}`, {
        headers: {
          authorization: localStorage.getItem('authorization')
        }
      })
      .then((res) => {
        this.setState({ notes: res.data })
      })
      .catch((err) => console.log(err))
  }

  updateNote = (note, tags) => {
    const updateNote = {}
    updateNote.title = this.state.title || note.title
    updateNote.content = this.state.content || note.content
    updateNote.tags = tags
    axios
      .put(`${serverURL}/api/notes/${note._id}`, updateNote, {
        headers: { authorization: localStorage.getItem('authorization') }
      })
      .then((res) => {
        this.setState({
          notes: res.data,
          title: '',
          content: ''
        })
      })
      .catch((err) => console.log(err))
  }

  newTitle = (event) => {
    this.setState({
      title: event.target.value
    })
  }

  newContent = (event) => {
    this.setState({
      content: event.target.value
    })
  }
  registerSuccess = (data) => {
    console.log(data)
    localStorage.setItem('authorization', `Bearer ${data.token}`)
    this.getNotes()
  }

  componentWillMount () {
    this.clearState()
    localStorage.clear()
  }

  render () {
    return (
      <div className='Layout'>
        <NavBar
          notes={this.state.notes}
          username={this.state.username}
          clearState={this.clearState}
        />
        <Route
          exact
          path='/'
          render={(props) => (
            <ListNotes
              notes={this.state.notes}
              username={this.state.username}
              clearState={this.clearState}
            />
          )}
        />

        <Route
          path='/create'
          render={(props) => (
            <CreateNote
              newTitle={this.newTitle}
              newContent={this.newContent}
              createNote={this.createNote}
              title={this.state.title}
              content={this.state.content}
            />
          )}
        />

        <Route
          path='/view/:id'
          render={(props) => (
            <ViewNote
              note={
                this.state.notes.filter(
                  (note) => note._id == props.match.params.id // eslint-disable-line
                )[0]
              }
              deleteNote={this.deleteNote}
            />
          )}
        />

        <Route
          path='/update/:id'
          render={(props) => (
            <UpdateNote
              note={
                this.state.notes.filter(
                  (note) => note._id == props.match.params.id // eslint-disable-line
                )[0]
              }
              newTitle={this.newTitle}
              newContent={this.newContent}
              updateNote={this.updateNote}
              title={this.state.title}
              content={this.state.content}
            />
          )}
        />
        <Route
          path='/register'
          render={(props) => <Register onRegister={this.registerSuccess} />}
        />
        <Route
          path='/login'
          render={(props) => <Login onLogin={this.registerSuccess} />}
        />
      </div>
    )
  }
}

export default Layout
