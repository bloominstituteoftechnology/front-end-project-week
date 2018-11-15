import React, { Component } from 'react'
import NoteCard from './NoteCard';

 class NoteCards extends Component {

    constructor() {
        super();

        this.state= {
            notes: [
                {
                    id: 1,
                    title: 'New Note',
                    content: 'className="note-text">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using'
                },
                {
                    id: 1,
                    title: 'New Note',
                    content: 'className="note-text">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using'
                },
                {
                    id: 1,
                    title: 'New Note',
                    content: 'className="note-text">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using'
                },
            ]
        } // End State
    }// End Constructor

  render() {
      const { notes }= this.state;

    return (
      <div>
        {notes.map(note => (
            <NoteCard 
                key={note.id}
                title={note.title}
                note={note}
            />
        ))}
      </div>
    )
  }
}

export default NoteCards;


