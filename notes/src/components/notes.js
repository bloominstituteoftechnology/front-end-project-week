import React, { Component } from 'react';

class NotesTest extends Component {
render() {
    return (
        <div className="rightSide"> <h2 className='yourNotes'>Your Notes:</h2>{this.props.notes.map(note => {
            return (
            <div key={note.id} className="borderGore">{note.title} <br />
            {note.text}</div>
            )
        })}
         </div>
    )
}
}


export default NotesTest;