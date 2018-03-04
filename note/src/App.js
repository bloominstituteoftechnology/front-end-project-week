import React, { Component } from 'react'
// import logo from './logo.svg';
import './App.css'

import NoteList from './component/NoteList'
import NoteView from './component/NoteView'
import NoteCreate from './component/NoteCreate'
import NoteEdit from './component/NoteEdit'
import {BrowserRouter as Router,  Route, Switch } from 'react-router-dom'


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/" component={NoteList} />
            <Route path="/noteview" component={NoteView} />
            <Route path="notecreate/" component={NoteCreate} />
            <Route path="/noteedit" component={NoteEdit} />
          </Switch>
          {/* <Route path="/SideBar" component={SideBar}/> */}
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
