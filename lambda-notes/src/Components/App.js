import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Banner from './Banner';
import ListView from './ListView';
import CreateNote from './CreateNote';
import ViewNote from './ViewNote';
import EditNote from './EditNote';

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      notes: [
        { id: 0, title: 'Note Title 1', content: 'Bacon ipsum dolor amet turkey bacon cupim biltong pork chop ribeye, hamburger kielbasa alcatra jerky venison t-bone ground round. Meatball rump cow leberkas.'},
        { id: 1, title: 'Note Title 2', content: 'Bacon ipsum dolor amet turkey bacon cupim biltong pork chop ribeye, hamburger kielbasa alcatra jerky venison t-bone ground round. Meatball rump cow leberkas.'},
        { id: 2, title: 'Note Title 3', content: 'Bacon ipsum dolor amet turkey bacon cupim biltong pork chop ribeye, hamburger kielbasa alcatra jerky venison t-bone ground round. Meatball rump cow leberkas.'},
        { id: 3, title: 'Note Title 4', content: 'Bacon ipsum dolor amet turkey bacon cupim biltong pork chop ribeye, hamburger kielbasa alcatra jerky venison t-bone ground round. Meatball rump cow leberkas.'},
        { id: 4, title: 'Note Title 5', content: 'Bacon ipsum dolor amet turkey bacon cupim biltong pork chop ribeye, hamburger kielbasa alcatra jerky venison t-bone ground round. Meatball rump cow leberkas.'},
        { id: 5, title: 'Note Title 6', content: 'Bacon ipsum dolor amet turkey bacon cupim biltong pork chop ribeye, hamburger kielbasa alcatra jerky venison t-bone ground round. Meatball rump cow leberkas.'}
      ],
      titleValue: '',
      contentValue: '',
      currentNote: {}
    }
  }

  handleInputChange = e => this.setState({[e.target.name]: e.target.value});
  handleAddNote = e => {
    e.preventDefault();
    const notes = this.state.notes.slice();
    notes.push({ id: this.state.notes.length, title: this.state.titleValue, content: this.state.contentValue });
    this.setState({notes, titleValue: '', contentValue: ''});
  }
  handleEditTitle= e => {
    this.setState({currentNote: {id: this.state.currentNote.id, title: e.target.value, content: this.state.currentNote.content}})
  }
  handleEditContent= e => {
    this.setState({currentNote: {id: this.state.currentNote.id, title: this.state.currentNote.title, content: e.target.value}})
  }
  handleEditNote = e => {
    e.preventDefault();
    const notes = this.state.notes.slice();
    const id = this.state.currentNote.id;
    notes[id] = { id: this.state.currentNote.id, title: this.state.currentNote.title, content: this.state.currentNote.content, };
    this.setState({notes, currentNote: {}});
    alert('NOTE UPDATED: Click \'View Your Notes\' to see all notes.')
  }
  handleSetCurrent = id => {
    this.setState({ currentNote: this.state.notes[`${id}`]})
  }

  render() {
    return (
      <div className="App">
        <Banner />
        <Route exact path='/' render={() => <ListView notes={this.state.notes} />} />
        <Route path='/create' render={() => <CreateNote contentValue={this.state.contentValue} titleValue={this.state.titleValue} handleAddNote={this.handleAddNote} handleInputChange={this.handleInputChange} />} />
        <Route path='/view/:id' render={(props) => <ViewNote {...props} notes={this.state.notes} />} />
        <Route path='/edit/:id' render={(props) => <EditNote {...props} notes={this.state.notes} currentNote={this.state.currentNote} handleSetCurrent={this.handleSetCurrent} handleEditNote={this.handleEditNote} handleEditTitle={this.handleEditTitle} handleEditContent={this.handleEditContent} />} />
      </div>  
    );
  }
}

export default App;
