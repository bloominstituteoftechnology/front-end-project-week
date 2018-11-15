import React, { Component } from 'react';
import './App.css';
import axios from 'axios'

import NotesList from './components/NotesList'
import CreateNewNote from './components/CreateNewNote'
import Home from './components/Home'

import { Route, Link } from 'react-router-dom'


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
      this.setState({ notes: response.data })
    })
    .catch(err => {
      console.log("Fail to POST a note to the server", err)
    })
  }

  handleDeleteNote = id => {
    axios 
    .delete(`https://fe-notes.herokuapp.com/note/delete/${id}`)
    .then(response => {
      this.setState({ notes: response.data })
    })
    .catch(err => {
      console.log("Fail to DELETE a note", err)
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
