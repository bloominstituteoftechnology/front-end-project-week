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

//localAPI = 'http://localhost:9000/api/notes'
//API = 'https://lambda-note-taking-app.herokuapp.com/api/notes'

class App extends Component {
  constructor(){
    super();
  this.state = {
    notes: [],
    selected: {},
    remove: false
  }
}

//initialize the application with the data - life cycle
    componentDidMount() {
      this.getNotes();
    }

getNotes = () => {
  console.log('is function called')
  return axios
  .get('https://lambda-note-taking-app.herokuapp.com/api/notes')
  .then(response => {
    console.log('data from axios request', response.data)
    console.log(this.state)
    this.setState({notes: response.data})
    console.log(this.state)
  })
  .catch(err => {
    console.log(err)
  })
}

handleSubmit = data => this.setState({note: data});

handleChange = event => {
  this.setState({ [event.target.name]: event.target.value})
}

handleContent = event => {
  this.setState({
    selected: {
      id: this.state.selected.id,
      name: this.state.selected.name,
      content: event.target.value
    }
  })
}

// handleAddNote = event => {
//   event.preventDefault();
//     const note = {
//         name: this.state.name,
//         content: this.state.content
//     };
    
//     console.log('note', note)

//     axios
//     .post('https://lambda-note-taking-app.herokuapp.com/api/notes', note)
//     .then(response => {
//         this.setState({
//           name: '',
//           content: ''
//       })
//       this.handleSubmit(response.data);
//     })
//     .catch(err =>
//   console.log(err));
// }

handleSelectNote = note => {
  this.setState({selected: note});
}

handleRefresh = () => {
  axios
  .get('https://lambda-note-taking-app.herokuapp.com/api/notes')
  .then(response => {
    this.setState({notes: response.data});
  })
  .catch(err => console.log(err));
}

handleTitleUpdate = event => {
  this.setState({
    selected: {
      id: this.state.notes.id,
      name: event.target.value,
      content: this.state.notes.content
    }
  })
}

handleBodyUpdate = event => {
  this.setState({
    selected: {
      id: this.state.selected.id,
      name: this.state.selected.name,
      content: event.target.value
    }
  })
}

handleDeleteNote = e => {
  const id = this.match.params.id;
  axios
  .delete(`https://lambda-note-taking-app.herokuapp.com/api/notes/${id}`)
  .then(response => {
      this.setState({id: null });
      this.state.history.push('/notes');
      this.state.toggleDelete();
      this.state.handleRefresh();
  })
  .catch(err => console.log(err))
}

toggleDeleteNote = () => {
  this.setState({ remove: !this.state.remove });
}

  render() {
    //console.log('logging state in App',this.state);
    return (
      <div className = "app">
        <Route path = "/" render = {props =>
        (< NavBar {...props}
          getNotes = {this.getNotes}
          notes = {this.state.notes}
        />)}
        />
        
        <Route path = "/notes" render={props =>
        (<NotesList {...props}
          getNotes = {this.getNotes}
          notes={this.state.notes} 
        />
        )}
        />

        <Route path = "/form" render = {props =>
        (<NewNoteForm {...props}
          getNotes = {this.getNotes}
          notes = {this.state.notes}
          />
        )}
        />


          <Route path = "/edit/:id" render={props=>
          (<UpdateNote {...props}  
            selected = {this.state.selected}
            getNotes = {this.getNotes}
            handleRefresh = {this.handleRefresh}
            handleSubmit = {this.handleSubmit} 
            notes = {this.state.notes}
          />
          )}
          />

          <Route path = "/note/:id" render={props =>
          (<NoteView {...props}
            handleSelectNote = {this.handleSelectNote}
            toggleDeleteNote = {this.toggleDeleteNote}
            notes={this.state.notes}           
          />
          )}
          />
          
          {this.state.remove ? (<Route path="/delete/:id" render={props => 
            (<DeleteNote {...props} 
            handleSelectNote={this.handleSelectNote} 
            toggleDeleteNote={this.toggleDeleteNote} />)} />) : null}
          
      </div>
      )
    }
  }

export default App;