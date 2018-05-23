import React, { Component } from 'react';
// import logo from './logo.svg';
import '../src/styles/App.css'
import { Switch, Route } from "react-router-dom";
import { SideNav, ListView, NoteView, Edit, Create } from './components'

class App extends Component {
  render() {
    return (
      <div className="container-fluid lambdaNotes" style={{padding: '0'}}>          
        <Route path="/" component={SideNav}/>
        <Switch>
          <Route exact path="/" component={ListView}/>
          <Route path="/note/:id" component={NoteView}/>
          <Route path="/create" component={Create}/>
          <Route path="/edit" component={Edit}/>
        </Switch>
        </div>
    );
  }
}

export default App;
