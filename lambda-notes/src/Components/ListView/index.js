import React from 'react';
import './styles.css';

export const NoteList = props => {
    return (
        <div className="notes">
            <div className="side">
                <h1>Lambda Notes</h1>
                <div className="links">View Your Notes</div>
                <div className="links">+Create New Note</div>
            </div>
            <div className="center">
                <h4>Your Notes:</h4>
                {/* {this.props.Notes.map(note => {
                    return <div>{note.title}, {note.body}</div>
                })} */}
            </div>
        </div>
    )
}