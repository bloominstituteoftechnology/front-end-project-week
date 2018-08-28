import React, { Component } from 'react';
import './index.css'

export default class EditNote extends Component {
    render() {
        return (
            <div className='createNoteContainer'>
                <h3>Edit Note:</h3>
                <input className='inputTitle' placeholder='Note Title'></input>
                <input className='inputContent' placeholder='Note Content'></input>
                <button className='createNoteButton'><strong>Update</strong></button>
            </div>
        )
    }
}