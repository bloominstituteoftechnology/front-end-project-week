import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import axios from 'axios';
import NavBar from './components/NavBar';
import NewNoteForm from './components/NewNoteForm';
import NotesList from './components/NotesList';
import NoteView from './components/NoteView';
import UpdateNote from './components/UpdateNote';
import DeleteNote from './components/DeleteNote';
import './App.css';


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
        
        <Route exact path = "/all" render={props =>
        (<NotesList {...props}
        notes={this.state.notes} 
        />
        )}
        />
        <Route path = "/form" render={props =>
        (<NewNoteForm {...props}
          title={this.state.title}
          textBody = {this.state.textBody}
          handleAddNote = {this.handleAddNote}
          handleChange = {this.handleChange}
          />
          )}
          />

          <Route path = "/edit/id" render={props=>
          (<UpdateNote {...props}
          notes = {this.state.notes}
          selected = {this.state.selected}
          handleTitleUpdate = {this.handleTitleUpdate}
          handleBodyUpdate = {this.handleBodyUpdate}
          handleSelectNote = {this.handleSelectNote}
          handleUpdateNote = {this.handleUpdateNote}
          />
          )}
          />

          <Route path="/notes/id" render={props =>
          (<NoteView {...props}
          note={this.state.note}
          />
          )}
          />

          {this.state.remove ? (<Route path = "/notes/id" render = {props=>
          (<DeleteNote {...props}
          handleSelectNote = {this.handleSelectNote}
          toggleDeleteNote = {this.toggleDeleteNote} 
          />
          )}
        />):null  
        }
          
          
      </div>
      )
    }
  }

export default App;