import React, { Component } from 'react';

class NoteList extends Component {
    state = {
        notes: [
            {
                note: 'Create App',
                details: 'Get app up and working',
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
                            <p>{note.details}</p>
                            </li>
                        )
                    })}
                </ul>
            </div>
        )
    }
}

export default NoteList;