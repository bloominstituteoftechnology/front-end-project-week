import React, { Component } from 'react';
import './App.css';
import { NavLink, Route } from 'react-router-dom';
// import the views here
import HomeView from './views/HomeView';
import AddNewNoteView from './views/AddNewNoteView';
import SingleNoteView from './views/SingleNoteView';
import NoteListView from './views/NoteListView';




class App extends Component {
  render() {
   return (     
     <div className='App'>
     <div className='navbar'>
      <h1>Lambda Notes</h1>
      <ul className='navbar-list'>
        <li>
          <NavLink exact to='/'>Home</NavLink>
        </li>
        <li>
          <NavLink exact to='/notes'>View Your Notes</NavLink>
        </li>
        <li>
          <NavLink exact to='/note-form'>+ Create New Note</NavLink>
        </li>
      </ul>
     </div>      

      <Route exact path='/' component={HomeView} />
      <Route exact path='/notes' component={NoteListView} />
      <Route exact path='/note-form' component={AddNewNoteView} />
      <Route path='/notes/:noteId' component={SingleNoteView} />
     </div>
   )
  }
}

export default App;
