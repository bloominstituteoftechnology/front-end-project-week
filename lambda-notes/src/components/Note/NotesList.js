import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import NoteCard from './NoteCard';

class NotesList extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <div className="App-content-container">
                <h2>Your Notes:</h2>
                <div className="NotesList-container">
                    {this.props.notes.map( (note) => <Link to={`/note/${note.id}`} className="NoteCard-list" key={note.id}> <NoteCard note={note} /> </Link>) }
                </div>
            </div>
        )
    }
}
 
export default NotesList;