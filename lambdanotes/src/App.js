import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import ListView from './Components/ListView/ListView.js';
import AddNote from './Components/AddNote/AddNote.js';
import OneView from './Components/OneView/OneView.js';
import EditNote from './Components/EditNote/EditNote.js';





class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path='/' component={ListView}/>
          <Route exact path='/new' component={AddNote}/>
          <Route path='/edit' component={EditNote}/>
          <Route path='/note' component={OneView}/>
        </Switch>
       
      </div>
    );
  }
}

export default App;
