import React, { Component } from 'react';
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
            <div>
                <h2>Your Notes</h2>
                <div>
                    {this.state.notes.map(note => <Note key={note.id} note={note} />)}
                </div>
            </div>
        )
    }
}

export default NoteList;