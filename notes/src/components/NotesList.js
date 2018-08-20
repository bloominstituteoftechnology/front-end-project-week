import React, { Component } from 'react';
import notesArray from './NotesArray';
import Note from './Note';

class NotesList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            notes: []
        }
    }

    componentDidMount() {
        this.setState({notes: notesArray})
    }

    render() {
        return (
            <div className="notesOuterDiv">
                <h2 className="notesListTitle">Your Notes:</h2>
                <div className="notesInnerDiv">
                {this.state.notes.map(note => <Note note={note} />)}
                </div>
            </div>
        )
    }
}

export default NotesList;