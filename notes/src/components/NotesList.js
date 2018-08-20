import React, { Component } from 'react';
import notesArray from './NotesArray';
import Note from './Note';

class NotesList extends Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }

    render() {
        return (
            <div className="notesOuterDiv">
                {notesArray.map(note => <Note note={note} />)}
            </div>
        )
    }
}

export default NotesList;