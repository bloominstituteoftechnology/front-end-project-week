import React, { Component } from 'react';
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
        <AddNote 
          onChange={this.onChange} 
          onSubmit={this.onSubmit} 
          title={this.state.title} 
          text={this.state.text} 
        />
        {this.state.notes.map(note => <Note note={note} key={note.id} />)}
      </div>
    );
  }
}

export default App;
