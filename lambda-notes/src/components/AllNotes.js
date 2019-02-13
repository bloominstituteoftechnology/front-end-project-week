import React , { Component } from 'react';

import Notes from './Notes'

export default class AllNotes extends Component {
    render() {
        // console.log(this.props.notes)
        return (
            <div>
                <ul>
                    {this.props.notes.map(note => {
                        return (
                            <div>
                             <Notes
                                 key={note.id}
                                 title = {note.title}
                                 textBody = {note.textBody}

                             />
                            </div>
                        )
                    })}
                </ul>
            </div>
        )
    }
}