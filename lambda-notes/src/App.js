import React, { Component} from 'react';
import {Route, Switch } from 'react-router-dom';

import CreateNote from './Components/CreateNote/CreateNote';
import SingleNoteView from './Components/NoteView/SingleNoteView';
import NoteContainer from './Components/NoteContainer/NoteContainer';
import EditNote from './Components/EditNote/EditNote';
import './App.css';

class App extends Component {
  render() {
    return (
      
   
        <Switch>
          <Route exact path='/' component={NoteContainer}/>
          <Route exact path= '/notes' component={NoteContainer}/>
          <Route path= '/notes/create' component={CreateNote}/>
          <Route path= '/notes/:id' component={SingleNoteView}/>
          <Route path= '/edit/:id' component={EditNote}/>
        </Switch>
     
 
    );
  }
}

export default App;
