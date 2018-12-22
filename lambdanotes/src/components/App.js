import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import NoteForm from './NoteForm'
import NoteView from './NoteView'
import './App.css';
import Home from './Home.js'

class App extends Component {
  render() {
    return (

      <div className="App">
        <Switch>
          <Route exact path='/' render={props => <Home {...props} />} />
          <Route path='/createnote' render={props => <NoteForm {...props} />} />
          <Route path='/notes/:id' render={props => <NoteView {...props}/>} />
        </Switch>
      </div>
    );
  }
}

export default App;
