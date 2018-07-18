import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import axios from 'axios';

import Banner from './Banner';
import ListView from './ListView';
import CreateNote from './CreateNote';
import ViewNote from './ViewNote';
import EditNote from './EditNote';
import DeleteNote from './DeleteNote';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      notes: [],
      titleValue: '',
      contentValue: '',
      currentNote: {},
      deleting: false
    }
  }

  componentDidMount() {
    axios
      .get('http://localhost:333/notes')
      .then(response => {
        console.log('GET RESPONSE: ', response)
        this.setState({ notes: response.data })
      })
      .catch(err => {console.log(err)})
  }

  handleSetCurrent = note => {
    this.setState({ currentNote: note })
  }
  handleInputChange = e => this.setState({[e.target.name]: e.target.value});
  handleEditTitle= e => {
    this.setState({currentNote: {id: this.state.currentNote.id, title: e.target.value, content: this.state.currentNote.content}})
  }
  handleEditContent= e => {
    this.setState({currentNote: {id: this.state.currentNote.id, title: this.state.currentNote.title, content: e.target.value}})
  }
  handleAddNote = e => {
    e.preventDefault();
    const notes = this.state.notes.slice();
    notes.push({ id: this.state.notes.length, title: this.state.titleValue, content: this.state.contentValue });
    this.setState({notes, titleValue: '', contentValue: ''});
  }
  handleEditNote = id => {
    const notes = this.state.notes.slice();
    for (let i=0; i<notes.length; i++) {
      if (notes[i].id === Number(id)) {
        notes[i] = { id: this.state.currentNote.id, title: this.state.currentNote.title, content: this.state.currentNote.content, };
      }
    }
    this.setState({notes, currentNote: {}});
    alert('NOTE UPDATED: Click \'View Your Notes\' in side banner to see all notes.')
  }
  handleDeleteNote = id => {
    let notes = this.state.notes.slice()
    notes = notes.filter(note => note.id !== Number(id))
    this.setState({notes, currentNote: {}, deleting: !this.state.deleting});
    alert('NOTE DELETED: Click \'View Your Notes\' in side banner to see all notes.')
  }
  toggleDeleting = () => {
    this.setState({ deleting: !this.state.deleting })
  }

  render() {
    return (
      <div className="App">
        <Banner />
        <Route exact path='/' render={() => <ListView notes={this.state.notes} />} />
        <Route path='/create' render={() => <CreateNote contentValue={this.state.contentValue} titleValue={this.state.titleValue} handleAddNote={this.handleAddNote} handleInputChange={this.handleInputChange} />} />
        <Route path='/view/:id' render={(props) => <ViewNote {...props} notes={this.state.notes} toggleDeleting={this.toggleDeleting} />} />
        <Route path='/edit/:id' render={(props) => <EditNote {...props} notes={this.state.notes} currentNote={this.state.currentNote} handleSetCurrent={this.handleSetCurrent} handleEditNote={this.handleEditNote} handleEditTitle={this.handleEditTitle} handleEditContent={this.handleEditContent} />} />
        {this.state.deleting ? (<Route path='/view/:id' render={props => (<DeleteNote {...props} toggleDeleting={this.toggleDeleting} handleSetCurrent={this.handleSetCurrent} handleDeleteNote={this.handleDeleteNote}/>)}/>) : null}
      </div>  
    );
  }
}

export default App;
