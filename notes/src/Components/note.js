import React, { Component } from 'react';

class Note extends Component {
    state = {
        notes: [
            {
                note: 'What`s the best computer science academy?',
                text: 'Lambda School!',
            }
        ],
    }

    render() {
        return (
            <div>
                <ul>
                    {this.state.notes.map(note => {
                        return (
                            <li>{note.note}
                                <p>{note.text}</p>
                            </li>
                        )
                    })}
                </ul>
            </div>
        )
    }
}
export default Note;