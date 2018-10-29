import React, { Component } from 'react';
import NoteCard from './NoteCard';

class All extends Component {
    render() {
        return (
            <div>
                <h1> Your Notes: </h1>
                {this.props.notes.map(note => {
                    return (
                        <NoteCard
                            title = {note.title}
                            textBody = {note.textBody}
                            
                            key = {note._id}
                            />
                    )
                })}
            </div>
        )
    }
}

export default All;