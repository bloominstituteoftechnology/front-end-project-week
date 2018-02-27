import React, { Component } from 'react';
import NoteListNote from './noteListNote';

class NoteList extends Component {
  componentDidMount() {
    this.setState({ notes: this.props.notes })
  }
  clampNote = (body) => {
    let textArr = body.split('')
    let result = [];
    if (body.length > 120) {
       return result.concat(textArr
         .slice(0, 120).join('') + '...')
    }
    return body;
  }
  render() {
    return (
      <div className="note-list">
      <div className="note-list__title">Your Notes:</div>
          { this.props.notes.map((note) => {
            return (
              <div key={note.id}>
                <NoteListNote title={note.title} body={this.clampNote(note.body)} />
              </div>
            )
          })}
      </div>
    );
  }
}

export default NoteList;