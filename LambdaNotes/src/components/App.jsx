import React, { Component } from 'react';

import SideBar from './SideBar';
import YourNotes from './contentViews/';

class App extends Component {
  render() {
    return (
      <div className='app'>
        <div className='sideBar'>
          <SideBar />
        </div>
        <div className='content'>
          <YourNotes />
        </div>
      </div>
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