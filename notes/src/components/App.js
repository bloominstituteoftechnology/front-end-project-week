import React, { Component } from 'react';

import './App.css';
import axios from 'axios';
import { Route, NavLink } from 'react-router-dom';

import { Notes } from './Notes';
import { AddNote } from './AddNote';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [],
    }
  }

  componentDidMount= () => {
    axios
    .get(`https://fe-notes.herokuapp.com/note/get/all`)
    .then ( response => {
      this.setState({notes: response.data})
    })
    .catch( err=> console.log(err))
  }

  addNote = obj => {
    axios.post('https://fe-notes.herokuapp.com/note/create', obj)
    .then(response => {
      this.setState({
        notes: response.data
      })
    })
    .catch( err => console.log(err))
  }

  render() {
    return (
      <div className="App">
        <div>
          <NavLink to='/'><button>View Your Notes</button></NavLink>
          <NavLink to='/add-note'><button>+ Add Note</button></NavLink>
        </div>
        <Route path="/add-note"
          render={props => (
            <AddNote addNote={this.addNote} />
          )} />
        
        <Route exact path="/"
          render={props => (
            <Notes notes={this.state.notes} />
          )} />
        
      </div>
    );
  }
}

export default App;
