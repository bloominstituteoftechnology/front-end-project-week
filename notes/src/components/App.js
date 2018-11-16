import React, { Component } from 'react';

import './App.css';
import axios from 'axios';
import { Route, NavLink } from 'react-router-dom';

import { Notes } from './Notes';
import { AddNote } from './AddNote';
import { NoteView } from './NoteView';
import { EditNote } from './EditNote';
import { DeleteNote } from './DeleteNote';



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
          <NavLink to='/note'><button>View Your Notes</button></NavLink>
          <NavLink to='/add-note'><button>+ Add Note</button></NavLink>
        </div>
        <Route path="/add-note"
          render={props => (
            <AddNote addNote={this.addNote} />
          )} />
        
        <Route exact path="/note"
          render={props => (
            <Notes notes={this.state.notes} />
          )} />

          

          <Route path="/note/:id" render={(props) => {
            return(<NoteView {...props}/>)}}
          />

          <Route path="/edit/:id/" render={(props) => {
              return(<EditNote {...props} />)
          }} />
        
        <Route path="/note/:id/delete" render={(props) => {
              return(<DeleteNote {...props} />)
          }} />
      </div>
    );
  }
}

export default App;
