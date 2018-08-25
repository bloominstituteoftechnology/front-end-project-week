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
      notes: dummyData,
      title: '',
      textBody: '',
      selected: {},
      remove: false
   }
}

// componentDidMount(){
//   axios.get('https://killer-notes.herokuapp.com/note/get/all')
//   .then(response =>{
//     console.log(response)
//     this.setState({notes: response.data})
//   })
//   .catch(err => {
//     console.log(err)
//   })
// }

handleSubmit = data => this.setState({notes: data});

handleChange = event => {
  this.setState({ [event.target.name]: event.target.value})
}

handleAddNote = event => {
  event.preventDefault();
  const notes = this.state.notes.slice();
  notes.push({title: this.state.title, 
    textBody: this.state.textBody, 
    id: Date.now() });
  this.setState({
    notes, 
    title: '', 
    textBody: ''
  });
}

handleSelectNote = id => {
  this.setState({selected: this.state.notes[`${id}`]});
}

handleTitleUpdate = event => {
  this.setState({
    selected: {
      id: this.state.selected.id,
      title: event.target.value,
      textBody: this.state.selected.textBody
    }
  })
}

handleBodyUpdate = event => {
  this.setState({
    selected: {
      id: this.state.selected.id,
      title: this.state.selected.title,
      textBody: event.target.value
    }
  })
}

handleUpdateNote =id => {
    const notes = this.state.notes.slice();
    for (let i=0; i<notes.length; i++){
      if (notes[i].id === Number(id)) {
        notes[i] = {
          id: this.state.selected.id,
          title: this.state.selected.title,
          textBody: this.state.selected.textBody
        };
      }
    }
    this.setState({ notes,selected: {} });
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

     <Route path = "/form" render={props =>
        (<NewNoteForm {...props}
          title = {this.state.title}
          textBody = {this.state.textBody}
          handleChange = {this.handleChange}
          handleAddNote = {this.handleAddNote}
          handleSubmit = {this.handleSubmit}
          notes = {this.state.notes}/>
          )}
          />


          <Route path = "/edit/:id" render={props=>
          (<UpdateNote {...props}  
            selected = {this.state.selected}
            handleTitleUpdate = {this.handleTitleUpdate}
            handleBodyUpdate = {this.handleBodyUpdate}
            handleUpdateNote = {this.handleUpdateNote} 
            handleSubmit = {this.handleSubmit} 
            notes = {this.state.notes}
          />
          )}
          />

          <Route path="/note/:id" render={props =>
          (<NoteView {...props}
            handleSelectNote = {this.state.handleSelectNote}
            toggleDelete = {this.toggleDelete}
            note={this.state.notes}           
          />
          )}
          />

          {this.state.remove ? (<Route path = "/note/:id" render = {props=>
          (<DeleteNote {...props}
          handleSelectNote = {this.handleSelectNote}
          toggleDeleteNote = {this.toggleDeleteNote} 
          notes={this.state.notes}
          />
          )}
        />
      )
      : null  
      }
          
          
      </div>
      )
    }
  }

export default App;