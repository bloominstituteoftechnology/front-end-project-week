import React from 'react';

export const NoteList = props => {
    return (
        <div>
            <div>
                <h1>Lambda Notes</h1>
                <button>View Your Notes</button>
                <button>+Create New Note</button>
            </div>
            <div>
                <h4>Your Notes:</h4>
                {/* {this.props.Notes.map(note => {
                    return <div>{note.title}, {note.body}</div>
                })} */}
            </div>
        </div>
    )
}