import React, { Component } from 'react';
import './NoteList.css';

import NotePreview from '../NotePreview/NotePreview';

class NoteList extends Component {

    constructor() {
        super();
        this.state = {
            notes: []
        }
    }    

    render() {
        return (
            <div className="note-list">
                <h3>Your Notes:</h3>
                <br />

                <div className="note-list-preview-container">
                    <NotePreview />
                    <NotePreview />
                    <NotePreview />
                    <NotePreview />
                    <NotePreview />
                    <NotePreview />
                    <NotePreview />
                    <NotePreview />
                    {/* could map over the notes that exist in state, then have them individually represented by each NoteThumbnail */}
                </div>
            </div>
        )
    }
}

export default NoteList;