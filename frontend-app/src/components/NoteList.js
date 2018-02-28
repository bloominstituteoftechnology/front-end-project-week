import React, { Component } from 'react';
import NoteCard from './Note';
import './NoteList.css';

class NoteList extends Component {
    nextId = 333;
    state = {
    notes: [
      {
        id: 1,
        title: 'Note Title Filler',
        content: 'content content content content content content content content'
      },
      {
        id: 2,
        title: 'Note Title Filler',
        content: 'content content content content content content content content'
      },
      {
        id: 3,
        title: 'Note Title Filler',
        content: 'content content content content content content content content'
      },
      {
        id: 4,
        title: 'Note Title Filler',
        content: 'content content content content content content content content'
      },{
        id: 5,
        title: 'Note Title Filler',
        content: 'content content content content content content content content'
      }
    ]
    
  }
    render() {
        return (
            <div>
                <ul>
                    {this.state.notes.map(note => {
                    return (
                        <div >
                            <NoteCard 
                            key={note.id}
                            note={note}
                            className='Note'
                            />
                        </div>
                    );
                    })}
                </ul>
            </div>
        );
    }
}

export default NoteList;