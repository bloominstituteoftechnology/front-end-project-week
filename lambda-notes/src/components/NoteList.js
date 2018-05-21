import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addNote, editNote, removeNote } from '../actions';

class NoteList extends Component {
    state = {
        notes: []
    }

    render() {
        return (
            <div>
                hello
            </div>
        )
    }
}

export default NoteList;