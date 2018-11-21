import React, { Component } from 'react';
import './NotesContainer.css'
class NotesContainer extends Component {

    render() {
        return (
            <div>
                <h1>Create New Note:</h1>
                <div>
                <input className="NoteInput" placeholder="Note Title..." />
                <textarea className="TextArea" placeholder="Note Content..." />
                </div>
                <button>Save</button>
            </div>
        )
    }
    

     
}

export default NotesContainer;