import React, { Component } from 'react';
import logo from './logo.svg';
import '../src/styles/App.css'
import { Switch, Route } from "react-router-dom";
import { SideNav, ListView, NoteView, Edit, Delete, Create } from './components'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header> 
        <SideNav />
        <Switch>
          <Route exact path="/" component={ListView} />
          <Route path="/note/:id" component={NoteView} />
          <Route path="/create" component={Create} />
          <Route path="/edit" component={Edit} />
          <Route path="/delete" component={Delete} />
        </Switch>
      </div>
    );
  }
}

export default App;
