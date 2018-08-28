import React, { Component } from 'react';
import './index.css'

export default class NoteView extends Component {
    render() {
        return (
            <div className='createNoteContainer'>
                <h3>Note Name</h3>
                <p>Content</p>
            </div>
        )
    }
}