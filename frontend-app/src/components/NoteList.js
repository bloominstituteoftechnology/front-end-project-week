import React, { Component } from 'react';
import NoteCard from './Note';
import './NoteList.css';

class NoteList extends Component {
    
    
  
    render() {
        return (
            <div>
                <ul>
                    {this.props.notes.map(note => {
                    return (
                        <div key={note.id}>
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