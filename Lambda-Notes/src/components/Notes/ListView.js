import React, { Component } from 'react';
import Note from './Note';

export default class NoteList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      noteList: [
        { id: 0, title: 'Note 2', content: 'some test' },
        { id: 1, title: 'Note 1', content: 'some test' },
        { id: 2, title: 'Note 3', content: 'some test' },
        { id: 3, title: 'Note 4', content: 'some test' },
        { id: 4, title: 'Note 5', content: 'some test' },
        { id: 5, title: 'Note 6', content: 'some test' },
        { id: 6, title: 'Note 7', content: 'some test' },
        { id: 7, title: 'Note 8', content: 'some test' },
        { id: 8, title: 'Note 9', content: 'some test' }
      ]
    };
  }

  render() {
    const { id, title, content } = this.state.noteList;
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
