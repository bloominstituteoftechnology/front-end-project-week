import React, { Component } from 'react';
import { Note } from '../Presentational';

export class YourNotes extends Component {

    render() {
        return (
            <div>YOUR NOTES
                {this.props.notes.map(note => (
                <Note 
                {...this.props} 
                key={note._id} 
                note={note} 
                />
                ))}
            </div>
        )
    }
}