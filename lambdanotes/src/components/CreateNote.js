import React, { Component } from 'react';
import './components.css'


export default class CreateNote extends Component {
    render() {
        return (
        <div className="CreateNote__Container">
            <div className="CreateNote__Title">
                Create New Note:
            </div>
            <form className="CreateNote__Form">
                <input type="text" placeholder="Note Title" className="CreateNote__NoteTitleFormInput"/>
                <input type="text" placeholder="Note Content" className="CreateNote__NoteContentFormInput"/>
            <button className="CreateNote__SaveButton">Save</button>
            </form>
        </div>
        )
    }
}