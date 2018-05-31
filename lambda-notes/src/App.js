import React, { Component} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import CreateNote from './Components/CreateNote/CreateNote';
import SingleNoteView from './Components/NoteView/SingleNoteView';
import NoteContainer from './Components/NoteContainer/NoteContainer';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path ='/' component={NoteContainer}/>
          <Route path = '/notes' component={NoteContainer}/>
          <Route path = '/notes/create' component={CreateNote}/>
          <Route path = '/notes/:id' component={SingleNoteView}/>
        </Switch>
        </Router>
    );
  }
}

export default App;
