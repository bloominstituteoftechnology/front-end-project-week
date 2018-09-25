import React, { Component } from 'react';
import { Note } from '../Presentational';

export class YourNotes extends Component {

    render() {
        return (
            <article className="your-notes">
                <h2>Your Notes</h2>
                {this.props.notes.map(note => (
                <Note 
                {...this.props} 
                key={note._id} 
                note={note} 
                />
                ))}
            </article>
        )
    }
}

