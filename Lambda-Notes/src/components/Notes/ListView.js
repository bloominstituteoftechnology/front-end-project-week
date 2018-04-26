import React, { Component } from 'react';
import Note from './Note';

export default class NoteList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { id, title, content } = this.state.props.noteList;
    return (
      <div>
        <h1 className="noteList__title">Your Notes:</h1>
        {this.state.noteList.map(note => (
          <div>
            <Note
              className="noteList"
              key={note.id}
              note={note}
              noteList={this.state.props.noteList}
            />
          </div>
        ))}
      </div>
    );
  }
}
