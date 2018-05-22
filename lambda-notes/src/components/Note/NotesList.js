import React, { Component } from 'react';
import NoteCard from './NoteCard';

class NotesList extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <div className="App-content-container">
                <h2>Your Notes</h2>
                <div className="NotesList-container">
                    {this.props.notes.map( (note) => <NoteCard className="NoteCard-list" key={note.id} note={note} />) }
                </div>
            </div>
        )
    }
}
 
export default NotesList;