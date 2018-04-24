import React, { Component } from 'react';
import Note from './Note';

export default class NoteList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      noteList: [
        { id: 0, label: 'Note 2', placeholder: 'some test' },
        { id: 1, label: 'Note 1', placeholder: 'some test' },
        { id: 2, label: 'Note 3', placeholder: 'some test' },
        { id: 3, label: 'Note 4', placeholder: 'some test' },
        { id: 4, label: 'Note 5', placeholder: 'some test' },
        { id: 5, label: 'Note 6', placeholder: 'some test' },
        { id: 6, label: 'Note 7', placeholder: 'some test' },
        { id: 7, label: 'Note 8', placeholder: 'some test' },
        { id: 8, label: 'Note 9', placeholder: 'some test' },
        { id: 9, label: 'Note 10', placeholder: 'some test' },
        { id: 10, label: 'Note 11', placeholder: 'some test' },
        { id: 11, label: 'Note 12', placeholder: 'some test' },
        { id: 12, label: 'Note 13', placeholder: 'some test' },
        { id: 13, label: 'Note 14', placeholder: 'some test' },
        { id: 14, label: 'Note 15', placeholder: 'some test' },
        { id: 15, label: 'Note 16', placeholder: 'some test' }
      ]
    };
  }

  render() {
    const { id, label, placeholder } = this.state.noteList;
    return (
      <div>
        {this.state.noteList.map(note => (
          <div>
            <Note key={note.id} note={note} />
          </div>
        ))}
      </div>
    );
  }
}
