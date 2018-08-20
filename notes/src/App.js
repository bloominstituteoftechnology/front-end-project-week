import React, { Component } from 'react';
import Note from './components/Note';

class App extends Component {
  dummyText = 'Morbi pellentesque euismod venenatis. Nulla ut nibh nunc. Phasellus diam metus, blandit ac purus a, efficitur mollis.';
  state = {
    notes: [
      {
        id: 0,
        title: 'Note title',
        text: this.dummyText
      },
      {
        id: 1,
        title: 'Note title',
        text: this.dummyText
      },
      {
        id: 2,
        title: 'Note title',
        text: this.dummyText
      },
    ]
  };

  render() {
    return (
      <div className="App">
        {this.state.notes.map(note => <Note note={note} />)}
      </div>
    );
  }
}

export default App;
