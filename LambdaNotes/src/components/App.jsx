import React, { Component } from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';

import SideBar from './SideBar';
import { YourNotes, CreateNote, ViewNote } from './contentViews/';

class App extends Component {
  render() {
    return (
      <Router>
        <div className='app'>
          <div className='sideBar'>
            <SideBar />
          </div>
          <div className='content'>
            <Route exact path="/" component={ YourNotes } />
            <Route exact path="/create" component={ CreateNote } />
            <Route exact path="/view/:id" component={ ViewNote } />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;

//finish setting up a static version of yourNotes view then work on otherviews
//TODO:
  //NoteCard Component
  //mapStateToprops for YourNotes
  //map the list of notes in YourNotes onto NoteCard Components
  //styling for: SideBar, ContentContainer, Your Notes, NoteCard