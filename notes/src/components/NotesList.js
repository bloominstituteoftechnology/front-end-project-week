import React, { Component } from 'react';
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
                <h2 className="notesListTitle">Your Notes:</h2>
                <div className="notesInnerDiv">
                {this.props.notes.map(note => <Note note={note} />)}
                </div>
            </div>
        )
    }
}

export default NotesList;