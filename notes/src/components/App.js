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
    .get(`http://localhost:3333/notes`)
    .then (response => {
      console.log(response)
      this.setState({notes: response.data})
    })
    .catch( err=> console.log(err))
  }

  addNote = obj => {
    axios.post('http://localhost:3333/notes', obj)
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
        <div className="Sidebar">
          <h1>Lambda Notes</h1>
          
          <NavLink to='/note'><button><i class="fa fa-file-text-o" aria-hidden="true"></i>View Your Notes</button></NavLink>
          <NavLink to='/add-note'><button>+ Add Note</button></NavLink>
        </div>
        <div className="Notesection">
        <div>
         
      </div>

      {/* <div>
        {this.state.notes.map(note => 
          <li key={note.id}>{note.title}</li>
        )}
      </div> */}
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
      </div>
    );
  }
}

export default App;
