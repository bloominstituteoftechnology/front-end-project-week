import React, { Component } from 'react';
import axios from 'axios';
import { Route } from 'react-router-dom';


import SidebarView from './sidebarComponent/sbView';
import NotesView from './NotesComponent/NotesView/notesView';
import AddNote from './formComponent/addNote';

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      notes: []
    }
  }

  // {/* Call to API and set the response data to our state */}
  componentDidMount() {
      axios
        .get('https://fe-notes.herokuapp.com/note/get/all')
          .then(res => this.setState({
              notes: res.data
          }))
          .catch(err => console.log(err))
  }

  addNote = (note) => {
    axios
      .post('https://fe-notes.herokuapp.com/note/create', note)
          .then(res => console.log(res))
          .catch(err => console.log(err))
  }


// {/* Declare Routes, Sidebar navigation should always show so it is the root */}
  render() {
    return (
      <div className="container">

          <Route path="/" component={SidebarView} />

          <Route 
            path="/notes"
            render={props => ( <NotesView {...props} notes={this.state.notes} /> )} 
          />

          <Route 
            path="/addnote"
            render={props=> ( <AddNote {...props} addNote={this.addNote} />)} />
          
      </div>
    );
  }
}

export default App;
