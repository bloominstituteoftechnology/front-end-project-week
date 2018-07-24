import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import YourNotes from './components/YourNotes/YourNotes.js';
import logo from './logo.svg';
import { Link } from 'react-router-dom';
import './App.css';
import CreateNote from './components/CreateNote/CreateNote.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state={
      notes:[],
    };
  }
  render() {
    return (
      <div className="App">
        <header className="App-sidebar">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Lambda Notes</h1>
          <Link to ='/'>
            <button className='sidebar-button'>View Your Notes</button>
          </Link>
          <Link to ='/create'>
            <button className='sidebar-button'>+ Create New Note</button>
          </Link>
        </header>
        <Route exact path='/' component={YourNotes} />
        <Route exact path='/create' component={CreateNote} />
        
      </div>
    );
  }
}

export default App;
