import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Notes from './components/Notes';
import Note from './components/Note';
import AddNote from './components/AddNote';
import DeleteNote from './components/DeleteNote';
import EditNote from './components/EditNote';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      notes: [
        {
          id: 0,
          title: 'Lorem Ipsum',
          textBody: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec consequat lacus nec elit tempus, eu ornare diam laoreet. Vestibulum sodales purus quis metus suscipit, a varius massa condimentum.'
        },
        {
          id: 1,
          title: 'Lorem Ipsum',
          textBody: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec consequat lacus nec elit tempus, eu ornare diam laoreet. Vestibulum sodales purus quis metus suscipit, a varius massa condimentum.'
        },
        {
          id: 2,
          title: 'Lorem Ipsum',
          textBody: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec consequat lacus nec elit tempus, eu ornare diam laoreet. Vestibulum sodales purus quis metus suscipit, a varius massa condimentum.'
        },
        {
          id: 3,
          title: 'Lorem Ipsum',
          textBody: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec consequat lacus nec elit tempus, eu ornare diam laoreet. Vestibulum sodales purus quis metus suscipit, a varius massa condimentum.'
        },
        {
          id: 4,
          title: 'Lorem Ipsum',
          textBody: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec consequat lacus nec elit tempus, eu ornare diam laoreet. Vestibulum sodales purus quis metus suscipit, a varius massa condimentum.'
        },
      ],
      newTitle: '',
      newTextBody: '',
      deleting: false,
      currentNote: {}
    }
  }
  handleInputChange = event => {
    this.setState({[event.target.name]:event.target.value})
  }
  handleSetCurrent = note => {
    this.setState({ currentNote: note })
  }
  handleAddNote = event => {
    let notes = this.state.notes.slice();
    notes.push({id: this.state.notes.length, title: this.state.newTitle, textBody: this.state.newTextBody});
    this.setState({notes, newTitle: '', newTextBody: ''});
  }
  handleDeleteNote = id => {
    let notes = this.state.notes.slice();
    notes = notes.filter(note => note.id !== Number(id))
    this.setState({notes, currentNote: {}, deleting: !this.state.deleting})
  }
  handleSetCurrent = note => {
   this.setState({ currentNote: note })
   }
  handleEditTitle = event => {
    this.setState({currentNote: {id: this.state.currentNote.id, title: event.target.value, textBody: this.state.currentNote.textBody}})
  }
  handleEditTextBody = event => {
  this.setState({currentNote: {id: this.state.currentNote.id, title: this.state.currentNote.title, textBody: event.target.value}})
}
  handleEditNote = id => {
    const notes = this.state.notes.slice();
    for(let i = 0; i < notes.length; i++) {
      if(notes[i].id === Number(id)) {
        notes[i] = { id: this.state.currentNote.id, title: this.state.currentNote.title, textBody: this.state.currentNote.textBody}
      }
    }
    this.setState({notes, currentNote: {}});
    alert('asdf');
  }
  render() {
    return (
      <div className='app'>
        <div className='navigation'>
          <Navigation />
        </div>
        <div className='content'>
          <Route exact path='/' render={props => <Notes {...props} notes={this.state.notes} />}/>
          <Route path='/note/:id' render={props => <Note {...props} notes={this.state.notes} />} />
          <Route path='/add' render={props =>
            <AddNote {...props} notes={this.state.notes} handleAddNote={this.handleAddNote} handleInputChange={this.handleInputChange} newTitle={this.state.newTitle} newTextBody={this.state.newTextBody}/>
          } />
        <Route path='/edit/:id' render={props => <EditNote {...props} notes={this.state.notes} currentNote={this.state.currentNote} handleSetCurrent={this.handleSetCurrent} handleEditNote={this.handleEditNote} handleEditTitle={this.handleEditTitle} handleEditTextBody={this.handleEditTextBody} />} />
        </div>
        <Route path='/note/:id/delete' render={props => (<DeleteNote {...props} toggleDeleting={this.toggleDeleting} handleSetCurrent={this.handleSetCurrent} handleDeleteNote={this.handleDeleteNote} currentNote={this.state.currentNote}/>)}/>
      </div>
    );
  }
}

export default App;
