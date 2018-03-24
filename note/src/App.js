import React, { Component } from 'react'
// import logo from './logo.svg';
import './App.css'

import NoteList from './components/NoteList'
import NoteView from './components/NoteView'
import NoteCreate from './components/NoteCreate'
import NoteEdit from './components/NoteEdit'
import {BrowserRouter as Router,  Route, Switch } from 'react-router-dom'


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/" component={NoteList} />
            <Route path="/noteview" component={NoteView} />
            <Route path="/notecreate" component={NoteCreate} />
            <Route path="/noteedit" component={NoteEdit} />
          </Switch>
          {/* <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header> */}
          {/* <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p> */}
        </div>
      </Router>
    );
  }
}

export default App;
