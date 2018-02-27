import React, { Component } from 'react';
import './App.css';
import NewNote from './components/NewNote';
// import DeleteNote from './components/DeleteNote';
// import EditNote from './components/EditNote';
import Notes from './components/Notes';

class App extends Component {
  // nextId = 10;
  constructor() {
    super();
    this.state = {
      notes: [],
    };
  }

  componentWillMount() {
    this.setState({notes: [
        {
          id: 0,
          title: 'Note Title',
          content: 'Morbi pellentesque euismod venenatis. Nulla ut nibh nunc. Phasellus diam metus, blandit ac purus a, efficitur mollis …',
        },
        {
          id: 1,
          title: 'Note Title',
          content: 'Morbi pellentesque euismod venenatis. Nulla ut nibh nunc. Phasellus diam metus, blandit ac purus a, efficitur mollis …',
        },
        {
          id: 2,
          title: 'Note Title',
          content: 'Morbi pellentesque euismod venenatis. Nulla ut nibh nunc. Phasellus diam metus, blandit ac purus a, efficitur mollis …',
        },
        {
          id: 3,
          title: 'Note Title',
          content: 'Morbi pellentesque euismod venenatis. Nulla ut nibh nunc. Phasellus diam metus, blandit ac purus a, efficitur mollis …',
        },
        {
          id: 4,
          title: 'Note Title',
          content: 'Morbi pellentesque euismod venenatis. Nulla ut nibh nunc. Phasellus diam metus, blandit ac purus a, efficitur mollis …',
        },
        {
          id: 5,
          title: 'Note Title',
          content: 'Morbi pellentesque euismod venenatis. Nulla ut nibh nunc. Phasellus diam metus, blandit ac purus a, efficitur mollis …',
        },
        {
          id: 6,
          title: 'Note Title',
          content: 'Morbi pellentesque euismod venenatis. Nulla ut nibh nunc. Phasellus diam metus, blandit ac purus a, efficitur mollis …',
        },
        {
          id: 7,
          title: 'Note Title',
          content: 'Morbi pellentesque euismod venenatis. Nulla ut nibh nunc. Phasellus diam metus, blandit ac purus a, efficitur mollis …',
        },
        {
          id: 8,
          title: 'Note Title',
          content: 'Morbi pellentesque euismod venenatis. Nulla ut nibh nunc. Phasellus diam metus, blandit ac purus a, efficitur mollis …',
        },
      ],
      noteTitle: '',
      notePreview: '',
      editing: false,
    });
  }

  render() {
    return(
      <div className="App">
        <div className="Left-Column">
          <h1 className="Left-Header">Lambda<br/>Notes</h1>
          <button>View Your Notes</button>
          <NewNote />
        </div>
        <div className="Right-Column">
          <h2 className="Right-Header">Your Notes:</h2>
          <Notes notes={this.state.notes} />
        </div>
      </div>
    );
  }

  // removeNote = id => {
  //   const newNotes = this.state.notes.filter(note => {
  //     return note.id !== id;
  //   });
  //   this.setState({ notes: newNotes });
  // };

  getNextId = () => {
    return this.nextId++;
  };

  // handleSubmit = event => {
  //   event.preventDefault();
  //   const newNote = {
  //     id: this.getNextId(),
  //     title: this.state.noteTitle,
  //     content: this.state.noteContent,
  //   };
  // }
}

export default App;