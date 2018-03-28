import React, { Component } from 'react';
import Nav from './components/Nav';
import NotesList from './components/notesList';
import Note from './components/Note';
import './App.css';
import AddNote from './components/AddNote';
import { Route } from 'react-router-dom';

class App extends Component {
  state = {
    notes: [
      {title: 'Note Title 1', text: 'Morbi pellentesque euismod venenatis. Nulla ut nibh nunc. Phasellus diam metus. Blandit ac purus a, efficitur mollis..', id: 0 },
      {title: 'Note Title 2', text: 'Morbi pellentesque euismod venenatis. Nulla ut nibh nunc. Phasellus diam metus. Blandit ac purus a, efficitur mollis..', id: 1 },
      {title: 'Note Title 3', text: 'Morbi pellentesque euismod venenatis. Nulla ut nibh nunc. Phasellus diam metus. Blandit ac purus a, efficitur mollis..', id: 2 },
      {title: 'Note Title 4', text: 'Morbi pellentesque euismod venenatis. Nulla ut nibh nunc. Phasellus diam metus. Blandit ac purus a, efficitur mollis..', id: 3 },
      {title: 'Note Title 5', text: 'Morbi pellentesque euismod venenatis. Nulla ut nibh nunc. Phasellus diam metus. Blandit ac purus a, efficitur mollis..', id: 4 },
      {title: 'Note Title 6', text: 'Morbi pellentesque euismod venenatis. Nulla ut nibh nunc. Phasellus diam metus. Blandit ac purus a, efficitur mollis..', id: 5 },
      {title: 'Note Title 7', text: 'Morbi pellentesque euismod venenatis. Nulla ut nibh nunc. Phasellus diam metus. Blandit ac purus a, efficitur mollis..', id: 6 },
      {title: 'Note Title 8', text: 'Morbi pellentesque euismod venenatis. Nulla ut nibh nunc. Phasellus diam metus. Blandit ac purus a, efficitur mollis..', id: 7 },
      {title: 'Note Title 9', text: 'Morbi pellentesque euismod venenatis. Nulla ut nibh nunc. Phasellus diam metus. Blandit ac purus a, efficitur mollis..', id: 8 },
    ],
    id: 9,
  }

  render() {
    return (
      <div className="App">
        <Route path="/" component={Nav} />
        <Route exact path="/" render={(props) => <NotesList {...props} notes={this.state.notes} />} />
        <Route exact path="/AddNote" component={AddNote} />
        <Route path="/notes/:id" component={Note} />
      </div>
    );
  }
}

export default App;