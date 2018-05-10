import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import NotesList from './components/noteslist.js';
import Leftnav from './components/leftnav';
import Frontpage from './components/frontpage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
       <NotesList />

        <Leftnav />
         <Route exact path='/' component={Frontpage} />
        {/* <Route path='/create' component={Create} />
        <Route path='/note/:id' component={Note} />
        <Route path="/edit" component={Edit} /> */} 
      </div>
    );
  }
}

export default App;
