import React, { Component } from 'react';
import Note from './Note';
import axios from 'axios';

export default class NoteList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: []
    };
  }

  componentDidMount() {
    this.getNotes();
  }

  getNotes = () => {
    axios
      .get(`http://localhost:5000/notes`)
      //   fetch data and store it in state
      .then(response => {
        //   console.log('response:', response);
        this.setState({ notes: response.data });
      })
      .catch(error => {
        console.error('Error', error);
      });
  };

  render() {
    return (
      <div>
        <h1 className="noteList__title">Your Notes:</h1>
        {this.state.notes.map(note => (
          <div>
            <Note
              className="noteList"
              key={note.id}
              note={note}
              getNotes={() => this.componentDidMount()}
            />
          </div>
        ))}
      </div>
    );
  }
}
