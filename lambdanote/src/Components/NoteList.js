import React, { Component } from 'react';
import dummyData from '../dummyData';
import Note from './Note';

class NoteList extends Component {
    constructor() {
        super();
        this.state = {
            notes: []
        };
    }

    componentDidMount() {
        this.setState({ notes: dummyData })
    }

    render () {
        return (
            <div>
                <div className='note-container'>
                <h2>Your Notes:</h2>
                <div>
                {this.state.notes.map(note => <Note key={note.id}note={note} />)}
                </div>
                </div>
            </div>
        )
    }
}


export default NoteList;