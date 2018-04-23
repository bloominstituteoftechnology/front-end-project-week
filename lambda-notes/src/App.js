import React, { Component } from 'react';
import './css/App.css';
import LeftRail from './containers/leftRail';
import CoreRail from './containers/coreRail';


class App extends Component {
  state = {
    notes: [
      {
          id: 0,
          title: "Welcome",
          body: "Welcome to the Lambda Notes App.  This is a sample note. You can write as many notes as you like.",
      },
      {
          id: 1,
          title: "Get a list",
          body: "You'll notice on the left of your screen there are two buttons. These are the main buttons for the app. Click on \"View Your Notes\" to see your list of notes.",
      },
      {
          id: 2,
          title: "Create Notes",
          body: "Below the \"View Your Notes\" button there is a \"+Create New Note\" button. You can create as many notes as you like.",
      },
      {
        id: 3,
        title: "Edit Notes",
        body: "Oops. You forgot to add a detail.  No problem. Just click on the note you want to change. On the page that follows you can click an edit button that will allow you to edit your note as you see fit.",
      },
      {
        id: 4,
        title: "Delete Notes",
        body: "No longer need that note? No problem. Click on the note preview and you will be presented with an option to delete that note.",
      },
      {
        id: 5,
        title: "WARNING",
        body: "This is just a demo. If you leave or refresh this app you will lose all your notes.  We are currently working on a version that will actually save your notes.",
      },
      {
        id: 6,
        title: "Features Upcoming",
        body: "We are working on several new features such as: search, markdown support, sorting options, tags, drag sorting, checklists, exporting to CSV, secure login.",
      },
  ],
  }
  render() {
    return (
      <div className="App">
        <LeftRail />
        <CoreRail notes={this.state.notes}/>
      </div>
    );
  }
}

export default App;
