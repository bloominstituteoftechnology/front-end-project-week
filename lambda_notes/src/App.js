import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'
import axios from 'axios'

import './App.css'
import ListView from './components/ListView'
import CreateNew from './components/CreateNew'
import ViewNote from './components/ViewNote'
// import dummyNotes from '../src/NoteData/dummyNotes'
import Update from './components/Update'

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
    this.getNotes()
    console.log('I am here', 'this.state', this.state)
    // }, 5000)
  }

  deleteNote (_id) {
    // const myURL = 'http://localhost:5000'
    const myURL = 'https://admiring-johnson-194c6a.netlify.com'
    axios.delete(`${myURL}/api/notes/${_id}`)
    // use filter to evalute on current copy of state
    let filteredNotes = this.state.notes.filter(note => note._id != _id) // eslint-disable-line
    console.log(_id, '{_id}')
    this.setState({
      notes: filteredNotes
    })
  }

  getNotes () {
    const myURL = 'https://admiring-johnson-194c6a.netlify.com'
    // const myURL = 'http://localhost:5000'
    axios
      .get(`${myURL}/api/notes`)
      .then(res => {
        console.log(res.data)
        this.setState({ notes: res.data })
      })
      .catch(err => {
        console.log(err)
      })
  }

  newUpdate (note, id) {
    // const myURL = 'http://localhost:5000'
    const myURL = 'https://admiring-johnson-194c6a.netlify.com'
    console.log('note', 'id', id, note)
    axios
      .put(`${myURL}/api/notes/${id}`, note)
      .then(res => {
        this.setState({ notes: res.data })
        console.log(res.data, 'response.data')
      })
      .catch(err => {
        console.log(err)
      })
    // let clonedNotes = this.state.notes
    // const updatedindex = clonedNotes.findIndex(ele => note.id == ele.id) // eslint-disable-line
    // console.log('updatedIndex', updatedindex, 'clonedNotes', clonedNotes)
    // clonedNotes.splice(Number(updatedindex), 1, note)
    // this.setState({
    //   notes: clonedNotes
    // })
  }

  createNew (note) {
    // note.id = this.state.count
    const myURL = 'http://localhost:5000'
    axios
      .post(`${myURL}/api/notes`, note)
      .then(res => {
        this.setState({ notes: res.data })
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
        </div>

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
      </div>
    )
  }
}

export default App
