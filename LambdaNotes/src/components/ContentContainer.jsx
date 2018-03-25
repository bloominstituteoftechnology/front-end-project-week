import React, { Component } from 'react';

import YourNotes from './contentViews/';

class ContentContainer extends Component {
  render() {
    return (
      <div>
        I'm the Content Container!
        <YourNotes />
      </div>
    );
  }
}

export default ContentContainer;

//finish setting up a static version of yourNotes view then work on otherviews
//TODO:
  //NoteCard Component
  //mapStateToprops for YourNotes
  //map the list of notes in YourNotes onto NoteCard Components
  //styling for: SideBar, ContentContainer, Your Notes, NoteCard