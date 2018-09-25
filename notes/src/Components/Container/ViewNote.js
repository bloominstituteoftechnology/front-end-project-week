import React, { Component } from 'react';
import { Note } from '../Presentational';

export class ViewNote extends Component {

    render() {
    let currentNote = this.props.notes.filter(note => (note._id.toString() === this.props.match.params.id.toString()));
    if (currentNote.length <= 0) {
        currentNote=[{title: "No note found!", id: "none", textBody:"We were unable to find a note matching this request!"}]
    }

    return (
        <section className="view-note">
        {
            <Note 
            {...this.props} 
            note={currentNote[0]} 
            expungeNote={this.props.expungeNote}
            />
        }
        </section>
    )
}
}