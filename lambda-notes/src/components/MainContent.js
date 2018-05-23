import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import ListView from './ListView.js';
import NewNote from './NewNote.js';
import NoteView from './NoteView.js';

class MainContent extends Component {
  render() {
    return (
      <div className="App">                
          <Route exact path="/" component={ListView}></Route>
          <Route path="/newnote" component={NewNote}></Route>
          <Route path="/noteview" component={NoteView}></Route>
          
      </div>
    );
  }
}

export default MainContent;