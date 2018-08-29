import React, { Component } from 'react';
import './index.css'

export default class CreateNote extends Component {
    render() {
        return (
            <div className='createNoteContainer'>
                <h3>Create New Note:</h3>
                <input type='text' className='inputTitle' placeholder='Note Title'></input>
                <textarea rows='20' className='inputContent' placeholder='Note Content'></textarea>
                <button className='createNoteButton'><strong>Save</strong></button>
            </div>
        )
    }
}