import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import axios from 'axios';
import NavBar from './components/NavBar';
import WelcomePage from './components/WelcomePage';
import NewNoteForm from './components/NewNoteForm';
import NotesList from './components/NotesList';
import NoteView from './components/NoteView';
import UpdateNote from './components/UpdateNote';
import DeleteNote from './components/DeleteNote';
import './App.css';

class App extends Component {
  state = {
    notes: [],
    note: {}
  }

componentDidMount(){
  axios
  .get('http://localhost:9000/api/notes')
  .then(response =>{
    console.log('data from axios request', response.data)
    console.log(this.state.notes)
    this.setState({notes: response.data})
  })
  .catch(err => {
    console.log(err)
  })
}

handleSubmit = data => this.setState({notes: data});

handleChange = event => {
  console.log('logging state in handleChange', this.state)
  this.setState({ [event.target.name]: event.target.value})
}

handleAddNote = event => {
  const notes = this.state.notes.slice();
  notes.push({name: this.state.name, 
    content: this.state.content, 
    id: Date.now() });
    console.log('logging state in handleAddNote', this.state)
  this.setState({
    notes, 
    name: '', 
    content: ''
  });
}

handleSelectNote = note => {
  this.setState({selected: note});
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

handleUpdateNote =id => {
    const notes = this.state.notes.slice();
    for (let i=0; i<notes.length; i++){
      if (notes[i].id === Number(id)) {
        notes[i] = {
          id: this.state.selected.id,
          name: this.state.selected.name,
          content: this.state.selected.content
        };
      }
    }
    this.setState({ notes, selected: {} });
  }

handleDeleteNote = (id) => {
  const newState = this.state.notes.filter((note => note.id !== id))
  axios
  .delete(`http://localhost:9000/api/notes/${id}`)
  .then(response => {
      this.setState({ notes: newState });
      this.state.toggleDelete();
      this.state.history.push('/notes');
  })
  .catch(err => console.log(err))
}

toggleDeleteNote = () => {
  this.setState({ remove: !this.state.remove })
}

  render() {
    console.log('logging state in App',this.state);
    return (
      <div className = "app">
        <Route path = "/" component={NavBar} />
        {/* <Route path = "/" component={WelcomePage} /> */}
        
        <Route path = "/notes" render={props =>
        (<NotesList {...props}
        notes={this.state.notes} 
        />
        )}
        />

     <Route path = "/form" render={props =>
        (<NewNoteForm {...props}
          name = {this.state.name}
          content = {this.state.content}
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

          <Route path = "/note/:id" render={props =>
          (<NoteView {...props}
            handleSelectNote = {this.handleSelectNote}
            toggleDelete = {this.toggleDelete}
            notes={this.state.notes}           
          />
          )}
          />

          <Route path = "/delete/:id" render = {props =>
          (<DeleteNote {...props}
          handleSelectNote = {this.handleSelectNote}
          toggleDeleteNote = {this.toggleDeleteNote} 
          notes={this.state.notes}
          />
          )}
        />
          
          
      </div>
      )
    }
  }

export default App;