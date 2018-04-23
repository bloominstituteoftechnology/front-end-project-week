import React, { Component } from 'react';

class NotesTest extends Component {
constructor(props) {
    super(props);
}
render() {
    return (
        <ul>{this.props.notes.map(note => {
            return (
            <li key={note.id}>{note.title} <br />
            {note.text}</li>
            )
        })}
         </ul>
    )
}
}


export default NotesTest;