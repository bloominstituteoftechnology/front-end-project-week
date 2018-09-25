import React, { Component } from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import NoteList from './components/NoteList';
import { notes } from './data'
import { Route, Switch } from 'react-router-dom'
import NoteView from './components/NoteView'
import EditNote from './components/EditNote'
import AddNote from './components/AddNote'

class App extends Component {
  constructor(){
    super(),
    this.state={
        notes: notes,
        newNote: '', 
        newTitle: '',
        selectedId: null        
    }
}
  handleChange = e => this.setState({[e.target.name]:e.target.value})

  handleAddNote = () =>{
    
    let notes = this.state.notes.slice();
    notes.push({id:this.state.notes.length, title:this.state.newTitle, note:this.state.newNote})
    this.setState({notes: notes, newNote:'', newTitle:''})
  }

  handleEditNote = () =>{
    let notes = this.state.notes.map(note =>{
      if (note.id == this.state.selectedId)
       return Object.assign({}, note, {title:this.state.newTitle, note: this.state.newNote})
      return note
    });
    
    this.setState({notes: notes, newNote:'', newTitle:''})
  }
  
  handleId = id =>{
    this.setState({selectedId: id})
  }

  handleDelete = () => {
    let notes = this.state.notes.filter(note =>{
      return note.id !== this.state.selectedId
    })
    this.setState({notes: notes})
  }

  render() {console.log(this.state)
    return (
      <div className="App">
        <Sidebar />
        <Switch>
          <Route exact path = '/' render = {props =>
            <NoteList {...props} 
              handleId = {this.handleId} 
              notes = {this.state.notes} 
            />} 
          />
          <Route exact path = '/:id' render = {props =>
            <NoteView {...props} 
              notes = {this.state.notes} 
              handleDelete = {this.handleDelete}
            />} 
          />
          <Route exact path = '/:id/edit' render = {() => 
            <EditNote 
              handleEditNote = {this.handleEditNote}
              handleChange = {this.handleChange}
              note = {this.state.newNote}
              title = {this.state.newTitle}
            />} 
          />
          <Route exact path = '/note/new' render = {props =>
            <AddNote {...props} 
              handleChange = {this.handleChange} 
              handleAddNote = {this.handleAddNote} 
              note = {this.state.newNote}
              title = {this.state.newTitle}
            />} 
          />
        </Switch>
      </div>
    );
  }
}

export default App;