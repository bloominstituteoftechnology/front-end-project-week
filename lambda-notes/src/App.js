import React, { Component} from 'react';
import { Route, Switch} from 'react-router';
import { BrowserRouter as Router } from 'react-router-dom';
import NoteContainer from './Components/List/NoteContainer';
import SingleNoteView from './Components/NoteView/SingleNoteView';
import EditNote from './Components/EditNote/EditNote';
import CreateNote from './Components/CreateNote/CreateNote';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Router>
        <Switch>
            <Route exact path = '/' component = {NoteContainer}/>
            <Route exact path='/list' component={NoteContainer}/>
            <Route path='/list/:number' component={SingleNoteView}/>
            <Route exact path = '/edit' component ={EditNote}/>
            <Route exact path = '/create' component = {CreateNote}/>
        </Switch>
      </Router>
        </div>
    );
  }
}

export default App;
