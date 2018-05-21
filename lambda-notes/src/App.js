import React, { Component } from 'react';
import './App.css';
import { Route, Switch} from 'react-router';
import { BrowserRouter as Router } from 'react-router-dom';
import List from './Components/List/List';
import NoteView from './Components/NoteView';
import EditNote from './Components/EditNote';

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route exact path = '/' component = {List}/>
            <Route path = '/list' component = {List} />
            <Route path = '/list/:id' component = {NoteView} />
            <Route path = '/list/:id/edit' component = {EditNote} />
          </Switch>
        </Router>
        </div>
    );
  }
}

export default App;
