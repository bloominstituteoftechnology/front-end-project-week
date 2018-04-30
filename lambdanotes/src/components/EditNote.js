import React, { Component } from 'react';
import './components.css'


export default class EditNote extends Component {
    render() {
        return (
        <div className="EditNote__Container">
            <div className="EditNote__Title">
                Edit Note:
            </div>
            <form className="EditNote__Form">
                <input type="text" placeholder="Note Title" className="EditNote__NoteTitleFormInput"/>
                <input type="text" placeholder="Note Content" className="EditNote__NoteContentFormInput"/>
            <button className="EditNote__SaveButton">Update</button>
            </form>
        </div>
        )
    }
}