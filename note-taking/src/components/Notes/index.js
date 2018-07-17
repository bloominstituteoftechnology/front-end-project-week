import React from 'react';
import { Component } from 'react'
import  NotesList  from '../NotesList';

class Notes extends Component {
    constructor() {
        super();
        this.state = {
        notes: [
            {
            id: 0,
            notetitle: "test",
            notebody: "test"
            },
            {
            id: 1,
            notetitle: "test",
            notebody: "test"
            },
            {
            id: 2,
            notetitle: "test",
            notebody: "test"
            },
        ]
   }
}

    render() {
        return (
        <div>
            <p>Your Notes: </p>
            <NotesList items={this.state.notes}/>
        </div>
        )
    }
}

export default Notes;