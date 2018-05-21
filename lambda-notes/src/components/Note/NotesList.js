import React, { Component } from 'react';
import NoteCard from './NoteCard';

class NotesList extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <div>
                {this.props.notes.map( (note) => <NoteCard key={note.id} note={note} />) }
            </div>
        )
    }
}
 
export default NotesList;