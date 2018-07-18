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
      currentNote: {},
      deleting: false
    }
  }
// New Functions
  componentDidMount() {
    axios
      .get('http://localhost:3333/notes')
      .then(response => {
        console.log('GET RESPONSE: ', response)
        this.setState({ notes: response.data })
      })
      .catch(err => {console.log(err)})
  }
  handleSetData = data => {this.setState({ notes: data, deleting: false })}
  toggleDeleting = () => {
    this.setState({ deleting: !this.state.deleting })
  }
// Old Functions
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

  render() {
    return (
      <div className="App">
        <Banner />
        <Route exact path='/' render={() => <ListView notes={this.state.notes} />} />
        <Route path='/create' render={() => <CreateNote contentValue={this.state.contentValue} titleValue={this.state.titleValue} handleSetData={this.handleSetData} />} />
        <Route path='/view/:id' render={(props) => <ViewNote {...props} notes={this.state.notes} toggleDeleting={this.toggleDeleting} />} />
        <Route path='/edit/:id' render={(props) => <EditNote {...props} notes={this.state.notes} currentNote={this.state.currentNote} handleSetCurrent={this.handleSetCurrent} handleEditNote={this.handleEditNote} handleEditTitle={this.handleEditTitle} handleEditContent={this.handleEditContent} />} />
        {this.state.deleting ? (<Route path='/view/:id' render={props => (<DeleteNote {...props} toggleDeleting={this.toggleDeleting} handleSetData={this.handleSetData} handleDeleteNote={this.handleDeleteNote}/>)}/>) : null}
      </div>  
    );
  }
}

export default App;
