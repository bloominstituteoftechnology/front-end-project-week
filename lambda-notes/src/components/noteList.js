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
  render() {
    return (
      <div className="note-list">
          { this.state.notes.map((note) => {
            return (
              <div key={note.id}>
                <NoteListNote title={note.title} body={note.body} />
              </div>
            )
          })}
      </div>
    );
  }
}

export default NoteList;