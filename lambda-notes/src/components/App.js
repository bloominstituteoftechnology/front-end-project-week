import React, { Component } from 'react';
import uuid from 'uuid';
import NotesList from './NotesList';

class App extends Component {
  state = {
    notes: [
      {
        id: uuid.v4(),
        title: 'Note Title',
        message: 'Morbi pellentesque euismod venentis. Nulla ut nibh nunc. Phallasellus diam metus, blandit ac purus a effictur mollis...'
      },
      {
        id: uuid.v4(),
        title: 'Note Title',
        message: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.'
      }
    ]
  }
  render() {
    console.log(this.state.notes);
    return (
      <div className="App container">
        <NotesList notes={this.state.notes} />
      </div>
    );
  }
}

export default App;
