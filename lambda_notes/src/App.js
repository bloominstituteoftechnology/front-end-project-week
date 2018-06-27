import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'
import axios from 'axios'

import './App.css'
import ListView from './components/ListView'
import CreateNew from './components/CreateNew'
import ViewNote from './components/ViewNote'
import Update from './components/Update'
import Register from './components/Register'
import Login from './components/Login'

class App extends Component {
  constructor () {
    super()
    this.state = {
      notes: []
    }
    this.createNew = this.createNew.bind(this)
    this.newUpdate = this.newUpdate.bind(this)
    this.deleteNote = this.deleteNote.bind(this)
    this.getNotes = this.getNotes.bind(this)
  }

  componentDidMount () {
    // setTimeout(() => {
    const token = localStorage.getItem('authorization')
    const requestOptions = {
      headers: {
        authorization: `${token}`
      }
    }
    this.getNotes(requestOptions)
    // console.log('I am here', 'this.state', this.state)
    // }, 5000)
  }

  deleteNote (_id) {
    const token = localStorage.getItem('authorization')
    const requestOptions = {
      headers: {
        authorization: `${token}`
      }
    }
    // const myURL = 'http://localhost:5000'
    const myURL = 'https://radiant-earth-25724.herokuapp.com'
    axios.delete(`${myURL}/api/notes/${_id}`, requestOptions)
    // use filter to evalute on current copy of state
    let filteredNotes = this.state.notes.filter(note => note._id != _id) // eslint-disable-line
    // console.log(_id, '{_id}')
    this.setState({
      notes: filteredNotes
    })
  }

  getNotes (requestOptions) {
    const myURL = 'https://radiant-earth-25724.herokuapp.com'
    // const myURL = 'http://localhost:5000'
    axios
      .get(`${myURL}/api/notes`, requestOptions)
      .then(res => {
        // console.log(res.data)
        this.setState({ notes: res.data })
        console.log(requestOptions)
      })
      .catch(err => {
        console.log(err)
      })
  }

  newUpdate (note, id) {
    const token = localStorage.getItem('authorization')
    const requestOptions = {
      headers: {
        authorization: `${token}`
      }
    }
    // const myURL = 'http://localhost:5000'
    const myURL = 'https://radiant-earth-25724.herokuapp.com'
    axios
      .put(`${myURL}/api/notes/${id}`, note, requestOptions)
      .then(res => {
        console.log(res.data, 'response.data before')
        this.setState({ notes: res.data })
        console.log(res.data, 'response.data after')
      })
      .catch(err => {
        console.log(err)
      })
  }

  signinSuccess = data => {
    // this.setState({ user: data.user })
    localStorage.setItem('authorization', `Bearer ${data.token}`)
    console.log(data.token)
  }

  createNew (note) {
    const token = localStorage.getItem('authorization')
    const requestOptions = {
      headers: {
        authorization: `${token}`
      }
    }

    // const myURL = 'http://localhost:5000'
    const myURL = 'https://radiant-earth-25724.herokuapp.com'
    axios
      .post(`${myURL}/api/notes`, note, requestOptions)
      .then(res => {
        this.setState({ notes: res.data })
        console.log(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }
  render () {
    return (
      <div className='App'>
        <div className='routerNavBar'>
          <div className='header'>
            {' '}<h1 className='header'>Lambda Notes </h1>{' '}
          </div>

          <Link className='btnLink' to='/'>
            {' '}<div className='btnSideNav'>View Your Notes </div>
          </Link>
          <Link className='btnLink' to='/CreateNew'>
            <div className='btnSideNav'> + Create New Note</div>
          </Link>

          {localStorage.getItem('authorization')
            ? <Link className='btnLink' to='/login'>
              <div
                onClick={() => localStorage.removeItem('jwt')}
                className='btnSideNav'
              >
                  Logout
              </div>
            </Link>
            : <div />}
        </div>
        <Route
          path='/register'
          render={props =>
            <Register {...props} onSignin={this.signinSuccess} />}
        />
        <Route
          path='/login'
          render={props => <Login {...props} onLogin={this.signinSuccess} />}
        />

        <Route
          exact
          path='/'
          render={() => <ListView notes={this.state.notes} />}
        />

        <Route
          path='/ViewNote/:id'
          render={props =>
            <ViewNote
              note={
                // this.state.notes
                this.state.notes.filter(
                  note => props.match.params.id == note._id // eslint-disable-line
                  // note = {this.state.notes}
                )[0]
              }
              deleteNote={this.deleteNote}
            />}
        />

        <Route
          path='/CreateNew'
          render={() => <CreateNew createNote={this.createNew} />}
        />
        <Route
          path='/Update/:id'
          render={props =>
            <Update id={props.match.params.id} updateNote={this.newUpdate} />}
        />
        {/* <Route
          path='/register'
          render={props =>
            <Register {...props} onSignin={this.signinSuccess} />}
        />
        <Route
          path='/login'
          render={props => <Login {...props} onLogin={this.signinSuccess} />}
        /> */}
      </div>
    )
  }
}

export default App
