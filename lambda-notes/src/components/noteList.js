import React, { Component } from 'react';
import NoteListNote from './noteListNote';
import { NavLink } from 'react-router-dom';

class NoteList extends Component {
  componentDidMount() {
    this.setState({ notes: this.props.notes })
  }
  clampNote = (body, limit) => {
    let textArr = body.split('')
    let result = [];
    if (body.length > limit) {
       return result.concat(textArr
         .slice(0, limit).join('') + '...')
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
                <NavLink className="note-list-note-link" to={`/note/${note.id}`}>
                  <NoteListNote title={this.clampNote(note.title, 10)} body={this.clampNote(note.body, 120)} />
                </NavLink>
              </div>
            )
          })}
      </div>
    );
  }
}

export default NoteList;