import React, { Component } from 'react';
import './App.css';
import NoteList from './components/NoteList';
import NewNote from './components/NewNote';

class App extends Component {
  state = {
    noteItem: [
      {
        id: 1,
        title: "kitty ipsum",
        text:
          "Pounce on unsuspecting person. Sniff other cat's butt and hang jaw half open thereafter. Bleghbleghvomit my furball really tie the room together.",
      },
      {
        id: 2,
        title: "kitty ipsum",
        text:
          "Pounce on unsuspecting person. Sniff other cat's butt and hang jaw half open thereafter. Bleghbleghvomit my furball really tie the room together.",
      },
      {
        id: 3,
        title: "kitty ipsum",
        text:
          "Pounce on unsuspecting person. Sniff other cat's butt and hang jaw half open thereafter. Bleghbleghvomit my furball really tie the room together.",
      },
      {
        id: 4,
        title: "kitty ipsum",
        text:
          "Pounce on unsuspecting person. Sniff other cat's butt and hang jaw half open thereafter. Bleghbleghvomit my furball really tie the room together.",
      },
      {
        id: 5,
        title: "kitty ipsum",
        text:
          "Pounce on unsuspecting person. Sniff other cat's butt and hang jaw half open thereafter. Bleghbleghvomit my furball really tie the room together.",
      },
      {
        id: 6,
        title: "kitty ipsum",
        text:
          "Pounce on unsuspecting person. Sniff other cat's butt and hang jaw half open thereafter. Bleghbleghvomit my furball really tie the room together.",
      },
      {
        id: 7,
        title: "kitty ipsum",
        text:
          "Pounce on unsuspecting person. Sniff other cat's butt and hang jaw half open thereafter. Bleghbleghvomit my furball really tie the room together.",
      },
      {
        id: 8,
        title: "kitty ipsum",
        text:
          "Pounce on unsuspecting person. Sniff other cat's butt and hang jaw half open thereafter. Bleghbleghvomit my furball really tie the room together.",
      },
      {
        id: 9,
        title: "kitty ipsum",
        text:
          "Pounce on unsuspecting person. Sniff other cat's butt and hang jaw half open thereafter. Bleghbleghvomit my furball really tie the room together.",
      },
    ],
    lastId: 9, 
  };

  render() {
    return (
      // <NoteList abc={this.state} />
      <NewNote abc={this.state} />
      );
  }
}

export default App;
