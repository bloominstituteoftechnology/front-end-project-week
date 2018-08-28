import React, { Component } from 'react';
import './index.css'

export default class CreateNote extends Component {
    render() {
        return (
            <div className='createNoteContainer'>
                <h3>Create New Note</h3>
                <input className='inputTitle' placeholder='Note Title'></input>
                <input className='inputContent' placeholder='Note Content'></input>
                <button className='createNoteButton'><strong>Save</strong></button>
            </div>
        )
    }
}