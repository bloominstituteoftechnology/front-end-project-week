import React, { Component } from 'react';
import Note from './Note';
import { Link } from 'react-router-dom';

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
                {this.props.notes.map(note => <Link to={`/notes/${note.id}`}><Note note={note} key={note.id} /></Link>)}
                </div>
            </div>
        )
    }
}

export default NotesList;