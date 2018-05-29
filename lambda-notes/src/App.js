import React, { Component } from 'react';
import './App.css';
import {Route, Switch } from 'react-router-dom'
import ListView from './Components/ListView/ListView'
import CreateNote from './Components/CreateNote/CreateNote'
import NoteView from "./Components/NoteView/NoteView"
import EditNote from "./Components/EditNote/EditNote"
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register"


class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Register}/>
          <Route exact path="/login" component={Login}/>
          <Route exact path="/home" component={ListView}/>
          <Route exact path="/new" component={CreateNote}/>
          <Route path="/edit" component={EditNote}/>
          <Route  path="/note" component={NoteView}/>
        </Switch>
      </div>
    );
  }
}

export default App;


