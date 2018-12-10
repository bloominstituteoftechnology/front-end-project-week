import React from 'react';

class Note extends React.Component {

    render() {
        const selectedNote = this.props.notes.find(note => `${note._id}` === this.props.match.params.noteId)

        if(selectedNote === undefined) {
            return <div>Loading...</div>
        }

        return (
            <div>
                <h2>{selectedNote.title}</h2>
                <p>{selectedNote.textBody}</p>
            </div>
        )
    }
}

export default Note;