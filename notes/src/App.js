import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import axios from 'axios';
import NavBar from './components/NavBar';
import NewNoteForm from './components/NewNoteForm';
import NotesList from './components/NotesList';
import NoteView from './components/NoteView';
import UpdateNote from './components/UpdateNote';
import DeleteNote from './components/DeleteNote';
import BasicNoteForm from './components/BasicNoteForm';
import './App.css';

const dummyData = [
  {
      id: 1,
      tags: [],
      title: 'Note Title',
      textBody: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
   },
  {
      id: 2,
      tags: [],
      title: 'Note Title',
      textBody: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
   },
  {
      id: 3,
      tags: [],
      title: 'Note Title',
      textBody: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
   },
  {
      id: 4,
      tags: [],
      title: 'Note Title',
      textBody: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
   },
]

class App extends Component {

  constructor() {
    super();
    this.state = {
      notes: [],
      selected: {},
      remove: false
   }
}

componentDidMount(){
  axios.get('https://killer-notes.herokuapp.com/note/get/all')
  .then(response =>{
    console.log(response)
    this.setState({notes: response.data})
  })
  .catch(err => {
    console.log(err)
  })
}



handleSelectNote = note => {
  this.setState({selected: note});
}


toggleDeleteNote = () => {
  this.setState({ remove: !this.state.remove })
}

  render() {
    console.log('logging state in App',this.state);
    return (
      <div className = "app">
        <Route path = "/" component={NavBar} />
        
        <Route exact path = "/" render={props =>
        (<NotesList {...props}
        notes={this.state.notes} 
        />
        )}
        />

{/* replace BasicNoteForm (interacts with local data) with NewNoteForm (uses post method) */}

        <Route path = "/form" render={props =>
        (<NewNoteForm {...props}
          notes = {this.state.notes}/>
          )}
          />


          <Route path = "/edit/:id" render={props=>
          (<UpdateNote {...props}    
          notes = {this.state.notes}
          />
          )}
          />

          <Route path="/notes/:id" render={props =>
          (<NoteView {...props}
          note={this.state.notes}
          toggleDelete = {this.toggleDelete}
          />
          )}
          />

          {this.state.remove ? (<Route path = "/notes/:id" render = {props=>
          (<DeleteNote {...props}
          handleSelectNote = {this.handleSelectNote}
          toggleDeleteNote = {this.toggleDeleteNote} 
          />
          )}
        />
      )
      :null  
      }
          
          
      </div>
      )
    }
  }

export default App;