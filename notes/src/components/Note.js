import React from 'react';
import { connect } from 'react-redux';

import { deleteNote } from '../actions';

class Note extends React.Component {

    render() {
        const selectedNote = this.props.notes.find(note => `${note._id}` === this.props.match.params.noteId)
        console.log(selectedNote);
        if(selectedNote === undefined) {
            return <div>Loading...</div>
        }

        return (
            <div>
                <div>
                    <button>Edit</button>
                    <button onClick={() => {this.props.deleteNote(selectedNote._id); this.props.history.push("/")}}>Delete</button>
                </div>
                <h2>{selectedNote.title}</h2>
                <p>{selectedNote.textBody}</p>
            </div>
        )
    }
}

export default connect(null, { deleteNote } )(Note);