import React, { Component } from 'react';
import './App.css';
import NoteList from './components/NoteList';

class App extends Component {
  state = {
    noteItem: [
      {
        id: 1,
        text:
          "Pounce on unsuspecting person. Sniff other cat's butt and hang jaw half open thereafter. Bleghbleghvomit my furball really tie the room together.",
      },
      {
        id: 2,
        text:
          "Pounce on unsuspecting person. Sniff other cat's butt and hang jaw half open thereafter. Bleghbleghvomit my furball really tie the room together.",
      },
      {
        id: 3,
        text:
          "Pounce on unsuspecting person. Sniff other cat's butt and hang jaw half open thereafter. Bleghbleghvomit my furball really tie the room together.",
      },
      {
        id: 4,
        text:
          "Pounce on unsuspecting person. Sniff other cat's butt and hang jaw half open thereafter. Bleghbleghvomit my furball really tie the room together.",
      },
      {
        id: 5,
        text:
          "Pounce on unsuspecting person. Sniff other cat's butt and hang jaw half open thereafter. Bleghbleghvomit my furball really tie the room together.",
      },
      {
        id: 6,
        text:
          "Pounce on unsuspecting person. Sniff other cat's butt and hang jaw half open thereafter. Bleghbleghvomit my furball really tie the room together.",
      },
      {
        id: 7,
        text:
          "Pounce on unsuspecting person. Sniff other cat's butt and hang jaw half open thereafter. Bleghbleghvomit my furball really tie the room together.",
      },
      {
        id: 8,
        text:
          "Pounce on unsuspecting person. Sniff other cat's butt and hang jaw half open thereafter. Bleghbleghvomit my furball really tie the room together.",
      },
      {
        id: 9,
        text:
          "Pounce on unsuspecting person. Sniff other cat's butt and hang jaw half open thereafter. Bleghbleghvomit my furball really tie the room together.",
      },
    ],
  };

  render() {
    return (
      <div className="App">
        <ul>
          {/* {this.state.map(obj => {
            return <NotesList key={} obj={} />
          })} */}
          <NoteList abc={this.state.noteItem} />
        </ul>
      </div>
    );
  }
}

export default App;
