import React, { Component } from 'react';
import NoteCard from './NoteCard';
import { Link } from 'react-router-dom';

class All extends Component {
    render() {
        return (
            <div>
                <h1> Your Notes: </h1>
                {this.props.notes.map(note => {
                    return (
                        <Link to={`/note/${note._id}`} key={note._id}>
                            <NoteCard
                                title = {note.title}
                                textBody = {note.textBody}
                                notes = {note}
                                key = {note._id}
                                />
                         </Link>
                    )
                })}
            </div>
        )
    }
}

export default All;