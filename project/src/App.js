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
        newTitle: ''
    }
}
  handleChange = e => this.setState({[e.target.name]:e.target.value})
  handleAddNote = () =>{
    
    let notes = this.state.notes.slice();
    notes.push({id:this.state.notes.length, title:this.state.newTitle, note:this.state.newNote})
    this.setState({notes: notes, newNote:'', newTitle:'' })
  }
  render() {
    return (
      <div className="App">
        <Sidebar />
        <Switch>
          <Route exact path = '/' render = {props => <NoteList {...props} notes = {this.state.notes} />} />
          <Route exact path = '/:id' render = {props => <NoteView {...props} notes = {this.state.notes} />} />
          <Route exact path = '/:id/edit' render = {() => <EditNote />} />
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
