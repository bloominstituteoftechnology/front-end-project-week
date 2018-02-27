import React, { Component } from 'react';
import NoteListNote from './noteListNote';

class NoteList extends Component {
  state = {
    notes: [
        {
            id: 0,
            title: "Note Title",
            body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos voluptatem, error nihil molestias ratione voluptatibus dolorem consequuntur.",
        },
        {
            id: 1,
            title: "Note Title",
            body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos voluptatem, error nihil molestias ratione voluptatibus dolorem consequuntur.",
        },
        {
            id: 2,
            title: "Note Title",
            body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos voluptatem, error nihil molestias ratione voluptatibus dolorem consequuntur.",
        },
        {
            id: 3,
            title: "Note Title",
            body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos voluptatem, error nihil molestias ratione voluptatibus dolorem consequuntur.",
        },
    ],
  }
  componentDidMount() {
    this.setState({ notes: this.state.notes })
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
          { this.state.notes.map((note) => {
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