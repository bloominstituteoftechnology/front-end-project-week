import React, { Component } from 'react';
import NoteCard from './NoteCard.js';

class NoteList extends Component {

    render() {
        return(
            <div className='row'>
                <NoteCard />
                <NoteCard />
                <NoteCard />
                <NoteCard />
                <NoteCard />
                <NoteCard />
                <NoteCard />
                <NoteCard />
                <NoteCard />
            </div>
        )
    }
}

export default NoteList;