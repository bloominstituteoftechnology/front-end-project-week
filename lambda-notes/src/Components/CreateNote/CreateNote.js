import React, { Component } from 'react';
import SideBar from "../SideBar/SideBar"
import "./CreateNote.css"
class CreateNote extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="body">
                <SideBar/>
                <div className = "create">
                    <h1>Create New Note:</h1>
                    <input type="text" placeholder="Note Title"/>
                    <textarea name="Text1" cols="118" rows="10" placeholder="Note Content"></textarea>
                    <button>Save</button>
                </div>
            </div>
        )
    }
}

export default CreateNote
