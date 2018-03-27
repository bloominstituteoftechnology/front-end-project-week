import React, { Component } from 'react';
import NoteCard from './NoteCard.js';

class NoteList extends Component {

    render() {
        return(
            <div className='col-12'>
                <div className='row'>
                    <div className='col-12 d-flex flex-row mt-5'>
                    <h2 className='justify-self-start font-weight-bold noteHeader'>Your Notes</h2>
                    </div>
                    <div className='row d-flex flex-row justify-content-around'>
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
                </div>
            </div>
        )
    }
}

export default NoteList;