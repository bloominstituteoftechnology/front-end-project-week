import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import Note from './components/Note';
import AddNote from './components/AddNote';

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
      }
    ],
    title: '',
    text: ''
  };

  storeNote = (note) => {
    this.setState({ note });
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    const { notes, title, text } = this.state;
    this.setState({
      notes: [...notes, {
        id: notes.length,
        title,
        text
      }],
      title: '',
      text: ''
    });
  };

  render() {
    return (
      <div className="App">
        {/* <Route
          path="/create"
          render={() => (
            <AddNote 
              onChange={this.onChange} 
              onSubmit={this.onSubmit} 
              title={this.state.title} 
              text={this.state.text} 
            />
          )}
        /> */}
        <AddNote 
          onChange={this.onChange} 
          onSubmit={this.onSubmit} 
          title={this.state.title} 
          text={this.state.text} 
        />
        <Route
          exact
          path="/"
          render={() => (
            <div>
              <h2>Your Notes:</h2>
              {this.state.notes.map(note => (
                <Link onClick={() => this.storeNote(note)} to={`/notes/${note.id}`}>
                  <Note note={note} key={note.id} />
                </Link>
              ))}
            </div>
          )}
        />
        <Route
          path="/notes/:id"
          render={() => (
            <Note note={this.state.note} />
          )}
        />
      </div>
    );
  }
}

export default App;
