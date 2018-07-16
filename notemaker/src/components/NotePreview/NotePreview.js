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
            <div className="note-preview-container">
                <div className="note-preview-inner-container">
                    <div className="note-preview-title">Placeholder</div>
                    <div className="note-preview-content">
                    Bacon ipsum dolor amet ground round corned beef kielbasa, pancetta fatback flank tail andouille sausage jerky turkey porchetta beef ribs ribeye. Hamburger rump pancetta picanha shank sirloin jowl.
                    </div>
                </div>
                {/* <NotePreview /> */}
                {/* could map over the notes that exist in state, then have them individually represented by each NoteThumbnail */}
            </div>
        )
    }
}

export default NotePreview;