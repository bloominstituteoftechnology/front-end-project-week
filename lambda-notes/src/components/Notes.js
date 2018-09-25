import React, { Component } from 'react';
import Note from './Note.js';
import { Link } from 'react-router-dom';

class Notes extends Component {
    render() {
        return (
            <div>
                {this.props.notes.map(note => {
                    return (
                        <div className="note" key={note._id}>
                            <Link to={`/notes/${note._id}`}>
                                <Note title={note.title} content={note.textBody} />
                            </Link>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default Notes;