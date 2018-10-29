import React, { Component } from 'react';
// import NoteCard from './Note';
// import { Link } from 'react-router-dom';

class NotesView extends Component {

    render() {
        return (
            <div>
                <h1>Your Notes:</h1>
                <div className="notes-container">
                
                {this.props.notes.map(note => {
                    return (
                        // <Link to={`/note/get/${note.id}`}>
                        <div key={note._id} className="note-card">
                        <h4>{note.title}</h4>
                        <p>{note.textBody}</p>
                        </div>
                        // </Link>
                    )
                    })}
                </div>
            </div>
        )
    }
}

export default NotesView;