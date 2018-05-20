import React, { Component } from 'react';
import './App.css';
import CreateNote from './CreateNote';
import NoteList from './NoteList';
import { Link } from 'react-router-dom';

class App extends Component {  
  render() {
    return (
      <div className='App'>
        <div className='SideBar'>
          <h1 className= 'title'>
            <Link className = 'titleText' to= '/'>Lambda Notes</Link>
          </h1>        
            <button className='viewNotes' type='submit'>
              <Link className = 'buttonText' to = '/' component={App}>View Your Notes</Link>
            </button>
            <button className='createNotes' type='submit'>
              <Link className = 'buttonText' to = '/create' component={CreateNote}>+ Create New Note </Link>              
            </button>        
          </div>      
        </div>
    )}
  };
       


export default App;
