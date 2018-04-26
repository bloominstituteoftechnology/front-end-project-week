import React, { Component } from 'react';
import { Route } from 'react-router-dom';


import './App.css';
import { createNew, ListView, Navigation, NotesList } from './components';

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      notes: []
    }
  }

addToNotesList = (notes) => {
  const notesList = this.state.notesList;
  notesList.push(notes);
  this.setState({ notesList });
}

render() {
  return (
    <div>
     <notesList list={this.state.notesList} />
     <Route exact path="/" component={listView} />
     <Route path="/notes/:id" render={ (props) => {
       return(<Note {...props} addToNotesList={this.addToNotesList}/>)
     }}/>
     </div>
      )    
    }    
  }  
  


