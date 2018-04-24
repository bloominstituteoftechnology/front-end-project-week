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
                    <input type="text" placeholder="Note Content"/>
                    <button>Save</button>
                </div>
            </div>
        )
    }
}

export default CreateNote
