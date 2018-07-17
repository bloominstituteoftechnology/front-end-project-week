import React, { Component } from 'react';
import './NotePreview.css';

class NotePreview extends Component {

    constructor() {
        super();
        this.state = {
            notes: []
        }
    }    

    render() {
        return (
            <a href="/view">
                <div className="note-preview-container">
                    <div className="note-preview-inner-container">
                        <div className="note-preview-title">Note Title</div>
                        <div className="note-preview-content">
                        Morbi pellentesque euismod venenatis. Nulla ut nibh nunc. Phasellus diam metus, blandit ac purus a, efficitur mollis ...
                        </div>
                    </div>
                    {/* <NotePreview /> */}
                    {/* could map over the notes that exist in state, then have them individually represented by each NoteThumbnail */}
                </div>
            </a>
        )
    }
}

export default NotePreview;