import React, { Component } from 'react';
import { Link } from "react-router-dom";
import NoteCard from './NoteCard';

class NoteList extends Component {

    render() {
        return (
            <div className = 'note-list-view'> 
                <h2>Your Notes:</h2>
                <div className='note-list'>
               
                    {
                        this.props.notes.map(note => 
                            <NoteCard
                            note={note}
                            />
                        )
                    }
                </div>
            </div>
        )
    }
}

export default NoteList;