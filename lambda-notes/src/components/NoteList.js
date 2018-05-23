import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './NoteList.css'
import note from './dummyData';
import Note from './Note';

class NoteList extends Component {
    constructor() {
        super();
        this.state = {
            notes: []
        };
    }

    componentDidMount() {
        this.setState({ notes: note })
    }

    render() {
        return (
            <div className='note-list'>
                <div className='note-list-container'>
                    <div className='note-list-header'>
                        <h2>Your Notes</h2>
                    </div>
                    <div>
                        {this.state.notes.map(note => <Note key={note.id} note={note} />)}
                    </div>
                </div>
            </div>
        )
    }
}

export default NoteList;